import './App.css';
import React from 'react';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import Userinfo from './Userinfo/Userinfo';
import SelectData from './SelectData/SelectData';
import Pagination from './Pagination/Pagination';
import Search from './Search/Search';
import EmptySearch from './EmptySearch/EmptySearch';
import Select from './Select/Select';

class App extends React.Component {

	state = {
		selectData: true, // Первый экран
		isLoading: false, // Лоадер
		data: [], // Данные с сервера
		search: null, // Строка поиска
		sort: true, // Направление сортировки
		sortField: null, // Сортрируемое поле
		rowClicked: null, // Нажатая строка
		currentPage: 0, // Текущая страница
		countItem: 28
	}

	async loadingData(amount) { // Получение данных с сервера
		const response = await fetch(`http://www.filltext.com/?rows=${amount}&firstName={firstName}&lastName={lastName}&id={number|1000}&email={email}&phone={phone|format}&city={city}&address={addressObject}`)
		const dataUsers = await response.json();
		this.setState({
			data: dataUsers,
			isLoading: false
		})
	}

	onSort = (sortField) => { // Сортировка
		const cloneData = [...this.state.data];
		if (this.state.sort || this.state.sortField !== sortField) {
			cloneData.sort((prev, next) => prev[sortField] > next[sortField] ? 1 : -1);
		}
		if (!this.state.sort && this.state.sortField === sortField) {
			cloneData.sort((prev, next) => prev[sortField] < next[sortField] ? 1 : -1);
		}
		this.setState({
			data: cloneData,
			sort: this.state.sortField === sortField ? !this.state.sort : false,
			sortField
		})
	}

	getLine = (user) => { // Нажатая строка
		this.setState({
			rowClicked: user
		})
	}

	modeSelect = (amount) => { // Загрузка данных после первого экрана
		this.setState({
			selectData: false,
			isLoading: true
		})
		this.loadingData(amount);
	}

	changePage = (currentPage) => { // Изменение активной страницы
		this.setState({
			currentPage
		})
	}

	onClickedSearch = (value) => { // Клик по кнопке "Поиск"
		this.setState({
			search: value,
			currentPage: 0
		})
	}

	getDataFiltered = () => { // Отфильтрованные данные, по умолчанию без фильтра
		const { data, search } = this.state;
		if (!search) return data;
		return data.filter(item =>
			item.firstName.toLowerCase().includes(search.toLowerCase())
			|| item.lastName.toLowerCase().includes(search.toLowerCase())
			|| item.email.toLowerCase().includes(search.toLowerCase())
		)
	}

	handleChangeSelect = (e) => {
		this.setState({
			countItem: +e.target.value,
			currentPage: 0
		})
	}

	render() {
		if (this.state.selectData) {
			return <SelectData modeSelect={this.modeSelect} />
		}
		const displayData = [];
		const dataFiltered = this.getDataFiltered();
		for (let i = 0; i < Math.ceil(dataFiltered.length / this.state.countItem); i++) {
			displayData.push(dataFiltered.slice((i * this.state.countItem), (i * this.state.countItem) + this.state.countItem));
		}

		return (
			<div className="App">
				{
					this.state.isLoading
						? <Loader />
						: <>
							<header className='header'>
								<Search onClickedSearch={this.onClickedSearch} />
								<Select value={this.state.countItem} handleChangeSelect={this.handleChangeSelect} />
							</header>
							{
								displayData.length > 0
									? <>
										<Table
											dataUsers={displayData[this.state.currentPage]}
											onSort={this.onSort}
											sortField={this.state.sortField}
											sortDirection={this.state.sort}
											getLine={this.getLine}
											currentPage={this.state.currentPage} />
										<Userinfo
											rowClicked={this.state.rowClicked} />
									</>
									: <EmptySearch />
							}
							{
								dataFiltered.length > this.state.countItem
									? <Pagination
										pageCount={displayData.length - 1}
										countItem={this.state.countItem}
										currentPage={this.state.currentPage}
										changePage={this.changePage} />
									: ''
							}
						</>
				}
			</div>
		);
	}
}

export default App;

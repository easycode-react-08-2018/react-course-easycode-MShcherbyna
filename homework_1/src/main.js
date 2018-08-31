import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import _ from 'lodash';
// import 'bootstrap/dist/css/bootstrap.min.css';

const mountNode = document.getElementById('app');
const button = document.getElementById('button');

const users = [
	{
	  id: 1,
	  fullName: 'Иванов Иван',
	  avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
	  birthdate: '1976-10-10',
	  gender: 'мужской',
	  address: 'ул. Звенигороская, 47б',
	  email: 'ivanov@mail.ru'
	},
	{
	  id: 2,
	  fullName: 'Петров Петр',
	  avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
	  birthdate: '1957-01-14',
	  gender: 'мужской',
	  address: 'ул.Пушкиская, 13',
	  email: 'ivanov@mail.ru'
	},
	{
	  id: 3,
	  fullName: 'Натальина Наталья',
	  avatarUrl: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
	  birthdate: '1990-07-03',
	  gender: 'женский',
	  address: 'ул. Лермонтова, 59',
	  email: 'ivanov@mail.ru'
	}
];

const header = [
	{
		key: 'birthdate',
		val: 'Дата рождения'
	},
	{
		key: 'gender',
		val: 'Пол'
	},
	{
		key: 'address',
		val: 'Адрес'
	},
	{
		key: 'email',
		val: 'Email'
	}
];

var usersCopy = users;

const UserPanel = (props) => {
	return (
		props.users.map(user =>{
			return (
				<div className="panel panel-info">
					<div className="panel-heading">
						<h3 className="panel-title">{user.fullName}</h3>
					</div>
					<div className="panel-body">
						<div className="row">
							<div>
								<div className="col-md-3 col-lg-3 " align="center">
									<img src="http://psdexport.com/storage/avatars/default.png" className="pull-left" />
								</div>
								<div className=" col-md-9 col-lg-9">
									<UserTable user={user} header={header} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		})
	);
};

const UserTable = (props) => {
	return (
		<table className="table table-user-information">
            <tbody>	
				{
					props.header.map(data =>{
						return <TableRow data={data} user={props.user} />
					})
				}
			</tbody>
		</table>
	)
};

const TableRow = (props) => {
	return (
		<tr>
			<td>{props.data.val}</td>
			<td>{props.user[props.data.key]}</td>
		</tr>
	)
}

const Button = (props) => {
	return <button type="button" className="btn btn-primary" onClick={() => copyUsers(props.users)} >Добавить Пользователей</button>
}

const copyUsers = (props) => {
	usersCopy = usersCopy.concat(props);
	ReactDOM.render(<UserPanel users={usersCopy} />, mountNode);
}

ReactDOM.render(<UserPanel users={users} />, mountNode);
ReactDOM.render(<Button users={users} />, button);
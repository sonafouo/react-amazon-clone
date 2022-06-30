import React, { useState } from 'react';
import './Test.css';
import { Link } from 'react-router-dom';

function Test() {
  const [inputText, setInputTest] = useState('');
  const [historyList,setHistoryList] = useState([]);
	const handleChange = (e) => {
    setInputTest(e.target.value);
    setHistoryList([...historyList,e.target.value]);
  };
  
  const historyListRender = historyList.map((item, index ) => {
    return <li key={index}>{item}</li>
    
  }
  );

	return (
		<div className='test'>
			<h1>Test</h1>
			<Link to={`/test/${inputText}`}></Link>
			<Link to='/'>Home </Link>
			<Link to='/checkout'>Checkout </Link>
			<Link to='/orders'>Orders</Link>
			<label className='test__label'>Text</label>
			<input
				type='text'
				onChange={handleChange}
				value={inputText}
				className='test__input'
				placeholder='Enter Some text'
			/>
			<ul className='test__history'>{historyListRender}</ul> 
		</div>
	);
}

export default Test;

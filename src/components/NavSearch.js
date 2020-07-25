import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import FormControl from 'react-bootstrap/FormControl'
import {NavLink, Link} from 'react-router-dom'
import logo from '../img/logo.png'
import {useDispatch, useSelector} from 'react-redux'
import {getAPI} from '../redux/actions/Food'


const NavSearch = () => {
    const [search, setSearch] = useState('')
    

    // Redux
    const dispatch = useDispatch()

    const searchHandler = (e) => {
        setSearch(e.target.value)
    }
    const searchRecipe = (search) => {
        console.log(search)
        dispatch(getAPI(search))
        setSearch('')
    }
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className="nav-bar">
            <div className="container">
            <Navbar bg="white" expand="lg">
                <Navbar.Brand>
                    <NavLink to="/"><img src={logo} alt="" /></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </Nav>
                        <form onSubmit={submitHandler} className="d-flex">
                            <input type="text" placeholder="Search Food..." value={search} class="form-control ds-input mr-sm-2" onChange={searchHandler} />
                            <NavLink to="/searchResult">
                                <button type="submit" className="btn btn-primary" onClick={e=>{searchRecipe(search)}}>Search</button> 
                            </NavLink>
                        </form>

                </Navbar.Collapse>
            </Navbar>
            </div>
        </div>
    )
}

export default NavSearch

import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { NavLink } from 'react-router-dom'

const SearchResult = () => {
    const foodList = useSelector(state => state.foods.foodList)
    const ListOfFood = foodList.length ? (
        <>
            {foodList.map(list => {
                return(
                    <div className='col-lg-3 mb-3' key={uuid()}>
                        <NavLink to={list.recipe.url}>
                            <div className="card">
                                <img className='img-fluid' src={list.recipe.image} alt="recipe-img"/>    
                                <div className="card-body">
                                    {list.recipe.label}
                                </div>
                            </div>
                        </NavLink>
                    </div>
                )
            })}
        </>
        ) : (
            <p className="search-food">Loading...</p>
            )
    return (
        <section className="search-result">
            <div className="container">
                <div className="row">
                    {ListOfFood}
                </div>
            </div>
        </section>
    )
}

export default SearchResult

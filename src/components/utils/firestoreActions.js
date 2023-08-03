import {useContext, useState, useEffect, createContext} from 'react'
import { useNavigate } from "react-router-dom"
import { auth, db, storage } from "../../config/firebase"
import { 
    doc, 
    setDoc, 
    getDoc, 
    onSnapshot,
} from  "firebase/firestore"


var today = new Date(),
  date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

export const addRecipe = ({
    title, 
    description,
    servingSize,
    calories,
    protein,
    carbs,
    fat,
    cookTime, 
    prepTime, 
    directions,
    image
}) => {
    const recipePost = {
        recipeTitle: title, 
        datePosted: date,
        quickFacts: {
            description: description,
            servingSize: servingSize,
            prepTime: prepTime,
            cookTime: cookTime,
            nutritionalFacts: {
                calories: calories,
                protein: protein,
                carbs: carbs,
                fat: fat,
            }
        },
        ingredients: {
            
        },
        directions: {
            directions: directions,
        },
        recipeImage: image
    }
}

export const addReview = ({
    title,
    rating,
    likes,
    comments,
    restaruant,
    post
}) => {
    const reviewPost = {
        reviewTitle: title,
        rating: rating,
        numberOfLikes: likes,
        numberOfComments: comments,
        datePosted: date,
        restaruantName: restaruant,
        postBody: post
    }
}

export const addComment = ({
    
}) => {

}
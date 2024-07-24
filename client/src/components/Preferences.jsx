import React from 'react';
import { useState } from 'react';
import a4gJuice from "./Images/a4gJuice.png";
import a4gMilk from "./Images/a4gMilk.png";
import a4gPastaSauce from "./Images/a4gPastaSauce.png";
import a4gTomatoSoup from "./Images/a4gTomatoSoup.png";
import a4gChickenSoup from "./Images/a4gChickenSoup.png";
import a4gMushroomSoup from "./Images/a4gMushroomSoup.png";
import a4gGreenBeans from "./Images/a4gGreenBeans.png";
import a4gCorn from "./Images/a4gCorn.png";
import a4gCarrots from "./Images/a4gCanCarrots.png";
import a4gPineapple from "./Images/a4gPineapple.png";
import a4gPear from "./Images/a4gPear.png";
import a4gPeach from "./Images/a4gPeach.png";
import a4gKidneyBeans from "./Images/a4gKidney.png";
import a4gChickpeas from "./Images/a4gGorbanzo.png";
import a4gBlackBeans from "./Images/a4GBlackBeans.png";
import a4gPeanutButter from "./Images/a4gPeanutButter.png";
import a4gCheerios from "./Images/a4gCheerios.png";
import a4gRiceKrispies from "./Images/a4gRiceKrispies.png";
import a4gApple from "./Images/a4gApple.png";
import a4gPotato from "./Images/a4gPotato.png";
import a4gOnion from "./Images/a4gOnion.png";
import a4gSweetPotato from "./Images/a4gSweetPotatos.png";
import a4gYams from "./Images/a4gYam.png";
import a4gLettuce from "./Images/a4gLettuce.png";
import a4gSquash from "./Images/a4gSquash.png";
import a4gChicken from "./Images/a4gChicken.png";
import a4gTurkey from "./Images/a4gTurkey.png";
import a4gHamburger from "./Images/a4gHamburger.png";
import a4gWhiteFish from "./Images/a4gWhiteFish.png";
import a4gRedFish from "./Images/a4gRedFish.png";
import a4gCheese from "./Images/a4gCheese.png";
import a4gBread from "./Images/a4gBread.png";
import a4gEggs from "./Images/a4gEggs.png";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Preferences() {
    const foodList = [
      "Juice", 
      "Milk", 
      "Pasta Sauce",
      "Tomato Soup",
      "Chicken Soup",
      "Mushroom Soup",
      "Green Beans", 
      "Corn",
      "Canned Carrots",
      "Pineapple",
      "Pear",
      "Peach",
      "Kidney Beans",
      "Chickpeas/garbanzo beans",
      "Black beans",
      "Peanut Butter",
      "Cheerios",
      "Rice Krispies",
      "Apple",
      "Potato",
      "Onion",
      "Sweet potato",
      "Yams",
      "Lettuce",
      "Squash",
      "Carrots",
      "Chicken",
      "Turkey",
      "Hamburger",
      "White fish",
      "Red fish",
      "Cheese",
      "Bread",
      "Eggs"
    ];
    const {username} = useParams()
    const [preferences, setPreferences] = useState({
        Family: 0,
        Allergies: '',
        Juice: false,
        Milk: false,
        Pasta_Sauce: false,
        Tomato_Soup: false,
        Chicken_Soup: false,
        Mushroom_Soup: false,
        Green_Beans: false,
        Corn: false,
        Carrots: false,
        Pineapple: false,
        Pear: false,
        Peach: false,
        Kidney_Beans: false,
        Chickpeas: false,
        Black_Beans: false,
        Peanut_Butter: false,
        Cheerios: false,
        Rice_Krispies: false,
        Apple: false,
        Potato: false,
        Onion: false,
        Sweet_Potato: false,
        Yams: false,
        Lettuce: false,
        Squash: false,
        Carrots: false,
        Chicken: false,
        Turkey: false,
        Hamburger: false,
        White_Fish: false,
        Red_Fish: false,
        Cheese: false,
        Bread: false,
        Eggs: false
    })

      function FoodSelect() {
        return (
            <>
                <form >
                <label>
                    <img src={a4gJuice} alt="Juice"></img>
                        Juice: <input
                            type="checkbox"
                            name="Juice"
                            checked = {preferences.Juice}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Juice: !preferences.Juice
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gMilk} alt="Milk"></img>
                        Milk: <input
                            type="checkbox"
                            name="Milk"
                            checked = {preferences.Milk}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Milk: !preferences.Milk
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gPastaSauce} alt="Pasta Sauce"></img>
                        Pasta Sauce: <input
                            type="checkbox"
                            name="Pasta Sauce"
                            checked = {preferences.Pasta_Sauce}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Pasta_Sauce: !preferences.Pasta_Sauce
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gTomatoSoup} alt="Tomato Soup"></img>
                        Tomato Soup: <input
                            type="checkbox"
                            name="Tomato Soup"
                            checked = {preferences.Tomato_Soup}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Tomato_Soup: !preferences.Tomato_Soup
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gChickenSoup} alt="Chicken Soup"></img>
                        Chicken Soup: <input
                            type="checkbox"
                            name="Chicken Soup"
                            checked = {preferences.Chicken_Soup}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Chicken_Soup: !preferences.Chicken_Soup
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gMushroomSoup} alt="Mushroom Soup"></img>
                        Mushroom Soup: <input
                            type="checkbox"
                            name="Mushroom Soup"
                            checked = {preferences.Mushroom_Soup}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Mushroom_Soup: !preferences.Mushroom_Soup
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gGreenBeans} alt="Green Beans"></img>
                        Green Beans: <input
                            type="checkbox"
                            name="Green Beans"
                            checked = {preferences.Green_Beans}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Green_Beans: !preferences.Green_Beans
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gCorn} alt="Corn"></img>
                        Corn: <input
                            type="checkbox"
                            name="Corn"
                            checked = {preferences.Corn}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Corn: !preferences.Corn
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gCarrots} alt="Carrots"></img>
                        Carrots: <input
                            type="checkbox"
                            name="Carrots"
                            checked = {preferences.Carrots}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Carrots: !preferences.Carrots
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gPineapple} alt="Pineapple"></img>
                        Pineapple: <input
                            type="checkbox"
                            name="Pineapple"
                            checked = {preferences.Pineapple}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Pineapple: !preferences.Pineapple
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gPear} alt="Pear"></img>
                        Pear: <input
                            type="checkbox"
                            name="Pear"
                            checked = {preferences.Pear}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Pear: !preferences.Pear
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gPeach} alt="Peach"></img>
                        Peach: <input
                            type="checkbox"
                            name="Peach"
                            checked = {preferences.Peach}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Peach: !preferences.Peach
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gKidneyBeans} alt="Kidney Beans"></img>
                        Kidney Beans: <input
                            type="checkbox"
                            name="Kidney Beans"
                            checked = {preferences.Kidney_Beans}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Kidney_Beans: !preferences.Kidney_Beans
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gChickpeas} alt="Chickpeas/garbanzo beans"></img>
                        Chickpeas/garbanzo beans: <input
                            type="checkbox"
                            name="Chickpeas/garbanzo beans"
                            checked = {preferences.Chickpeas}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Chickpeas: !preferences.Chickpeas
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gBlackBeans} alt="Black beans"></img>
                        Black beans: <input
                            type="checkbox"
                            name="Black beans"
                            checked = {preferences.Black_Beans}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Black_Beans: !preferences.Black_Beans
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gPeanutButter} alt="Peanut Butter"></img>
                        Peanut Butter: <input
                            type="checkbox"
                            name="Peanut Butter"
                            checked = {preferences.Peanut_Butter}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Peanut_Butter: !preferences.Peanut_Butter
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gCheerios} alt="Cheerios"></img>
                        Cheerios: <input
                            type="checkbox"
                            name="Cheerios"
                            checked = {preferences.Cheerios}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Cheerios: !preferences.Cheerios
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gRiceKrispies} alt="Rice Krispies"></img>
                        Rice Krispies: <input
                            type="checkbox"
                            name="Rice Krispies"
                            checked = {preferences.Rice_Krispies}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Rice_Krispies: !preferences.Rice_Krispies
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gApple} alt="Apple"></img>
                        Apple: <input
                            type="checkbox"
                            name="Apple"
                            checked = {preferences.Apple}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Apple: !preferences.Apple
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gPotato} alt="Potato"></img>
                        Potato: <input
                            type="checkbox"
                            name="Potato"
                            checked = {preferences.Potato}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Potato: !preferences.Potato
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gOnion} alt="Onion"></img>
                        Onion: <input
                            type="checkbox"
                            name="Onion"
                            checked = {preferences.Onion}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Onion: !preferences.Onion
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gSweetPotato} alt="Sweet potato"></img>
                        Sweet potato: <input
                            type="checkbox"
                            name="Sweet potato"
                            checked = {preferences.Sweet_Potato}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Sweet_Potato: !preferences.Sweet_Potato
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gYams} alt="Yams"></img>
                        Yams: <input
                            type="checkbox"
                            name="Yams"
                            checked = {preferences.Yams}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Yams: !preferences.Yams
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gLettuce} alt="Lettuce"></img>
                        Lettuce: <input
                            type="checkbox"
                            name="Lettuce"
                            checked = {preferences.Lettuce}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Lettuce: !preferences.Lettuce
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gSquash} alt="Squash"></img>
                        Squash: <input
                            type="checkbox"
                            name="Squash"
                            checked = {preferences.Squash}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Squash: !preferences.Squash
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gCarrots} alt="Carrots"></img>
                        Carrots: <input
                            type="checkbox"
                            name="Carrots"
                            checked = {preferences.Carrots}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Carrots: !preferences.Carrots
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gChicken} alt="Chicken"></img>
                        Chicken: <input
                            type="checkbox"
                            name="Chicken"
                            checked = {preferences.Chicken}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Chicken: !preferences.Chicken
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gTurkey} alt="Turkey"></img>
                        Turkey: <input
                            type="checkbox"
                            name="Turkey"
                            checked = {preferences.Turkey}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Turkey: !preferences.Turkey
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gHamburger} alt="Hamburger"></img>
                        Hamburger: <input
                            type="checkbox"
                            name="Hamburger"
                            checked = {preferences.Hamburger}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Hamburger: !preferences.Hamburger
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gWhiteFish} alt="White fish"></img>
                        White fish: <input
                            type="checkbox"
                            name="White fish"
                            checked = {preferences.White_Fish}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    White_Fish: !preferences.White_Fish
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gRedFish} alt="Red fish"></img>
                        Red fish: <input
                            type="checkbox"
                            name="Red fish"
                            checked = {preferences.Red_Fish}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Red_Fish: !preferences.Red_Fish
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gCheese} alt="Cheese"></img>
                        Cheese: <input
                            type="checkbox"
                            name="Cheese"
                            checked = {preferences.Cheese}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Cheese: !preferences.Cheese
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gBread} alt="Bread"></img>
                        Bread: <input
                            type="checkbox"
                            name="Bread"
                            checked = {preferences.Bread}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Bread: !preferences.Bread
                                })
                            }}
                        />
                    </label><br />

                    <label>
                        <img src={a4gEggs} alt="Eggs"></img>
                        Eggs: <input
                            type="checkbox"
                            name="Eggs"
                            checked = {preferences.Eggs}
                            onChange={() => {
                                setPreferences({
                                    ...preferences,
                                    Eggs: !preferences.Eggs
                                })
                            }}
                        />
                    </label><br />


                </form>
            </>
        )
      }
    
      function Submit() {
        axios.put('http://localhost:3000/client/update/'+username, {preferences})
        .then(res => {
          if(res.data.updated) {
            alert('Preferences submitted')
          }
          else {
            alert('Preferences couldn\'t be submitted due to an error. Email tjaschowalter@gmail.com or text 508-728-7422 for support')
            console.log(res)
          }
        }).catch(err => console.log(err))
      }
    
    

    return (
        <>
            {/*General information*/}
            <h1>
              Please tell us about yourself and your food preferences. We will use this to fill a bag for you, but can't guarantee that you'll get everything that you want and nothing that you do not want.
            </h1>
        
            <form>
                <label>
                Number of people in the household:{' '}
                <input
                    value={preferences.Family}
                    onChange={(e) => {setPreferences({
                        ...preferences,
                        Family: e.target.value
                    })}}
                    type="number"
                    name="Family"
                />
                </label><br />
                <br />

                <label>
                list any allergies and dietary restrictions:{' '}
                <input
                    value={preferences.Allergies}
                    onChange={(e) => {setPreferences({
                        ...preferences,
                        Allergies: e.target.value
                    })}}
                    type="text"
                    name="allergies"
                />
                </label><br />
            </form>

            Please select the foods that you want.
                <FoodSelect />

            {/*repeating information*/}

        {preferences.Family <= 0 && (
          <p>
            {preferences.Family} is not a possible number of people in your household.
          </p>
        )}
        {preferences.Family%1 !== 0 && <p> We unfortunatly cannot serve part of a person. Please correct the number.</p>}

        {/*button*/}
        {preferences.Family >= 1 && preferences.Family%1 == 0 && (
            <button type="submit" onClick={() => Submit()}>Submit</button>
        )}
        </>
    );
};

export default Preferences;
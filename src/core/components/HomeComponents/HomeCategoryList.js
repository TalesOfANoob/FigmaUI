/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Category} from './SearchBarComponents';
import {CategoryListStyles as styles} from './styles';
const HomeCategoryList = () => {

    const [selected,setSelected] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=>selected === 0 ? null : setSelected(0)}
            >
                {selected === 0
                ? <Category img={require('../../resources/HomeSelected.png')} title="Home" selected={true}/>
                : <Category img={require('../../resources/Home.png')} title="Home" selected={false}/>}

            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>selected === 1 ? null : setSelected(1)}
            >
                {selected === 1
                ? <Category img={require('../../resources/ApSelected.png')} title="Home" selected={true}/>
                : <Category img={require('../../resources/Ap.png')} title="Home" selected={false}/>}

            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>selected === 2 ? null : setSelected(2)}
            >
                {selected === 2
                ? <Category img={require('../../resources/KeySelected.png')} title="Home" selected={true}/>
                : <Category img={require('../../resources/Key.png')} title="Home" selected={false}/>}

            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>selected === 3 ? null : setSelected(3)}
            >
                {selected === 3
                ? <Category img={require('../../resources/DiscountSelected.png')} title="Home" selected={true}/>
                : <Category img={require('../../resources/Discount.png')} title="Home" selected={false}/>}

            </TouchableOpacity>




        </View>
    );
};

export default HomeCategoryList;

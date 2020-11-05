/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Category} from './SearchBarComponents';
import {CategoryListStyles as styles} from './styles';
import {

    Home,
    HomeSelected,
    Ap,
    ApSelected,
    Key,
    KeySelected,
    Discount,
    DiscountSelected,

} from '../../resources';
const HomeCategoryList = () => {

    const [selected,setSelected] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=>selected === 0 ? null : setSelected(0)}
            >
                {selected === 0
                ? <Category img={HomeSelected} title="Home" selected={true}/>
                : <Category img={Home} title="Home" selected={false}/>}

            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>selected === 1 ? null : setSelected(1)}
            >
                {selected === 1
                ? <Category img={ApSelected} title="Home" selected={true}/>
                : <Category img={Ap} title="Home" selected={false}/>}

            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>selected === 2 ? null : setSelected(2)}
            >
                {selected === 2
                ? <Category img={KeySelected} title="Home" selected={true}/>
                : <Category img={Key} title="Home" selected={false}/>}

            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>selected === 3 ? null : setSelected(3)}
            >
                {selected === 3
                ? <Category img={DiscountSelected} title="Home" selected={true}/>
                : <Category img={Discount} title="Home" selected={false}/>}

            </TouchableOpacity>




        </View>
    );
};

export default HomeCategoryList;

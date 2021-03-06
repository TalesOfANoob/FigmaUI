/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../core/themes/colors';
export default StyleSheet.create({
    container:{

        flex:1,
    },

    carouselContainer:{
        width:'100%',
        height:405,
    },
    carousel:{
        position:'absolute',
    },
    locationImage:{
        width:450,
        height:405,

    },
    carouselDotsContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:RFValue(200),
    },
    carouselDot:{
        fontSize:RFValue(20),
        marginHorizontal:RFValue(-5),
        fontWeight:'bold',
        color:colors.backgroundWhite,
    },
    carouselDotSelected:{
        color:colors.iconCyan,
    },
    topButtonContainer:{

        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:75,
    },
    backIconContainer:{
        width:42,
        height:42,
        backgroundColor:'white',
        borderRadius:21,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: 'rgba(45, 87, 137, 0.25)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    },
    backIcon:{
        fontSize:RFValue(30),
        color:colors.fontBlue,
    },
    availability:{
        width:120,
        height:30,
        borderRadius:50,
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:RFValue(13),
    },
    available:{backgroundColor:colors.availableGreen},

    unAvailable:{backgroundColor:colors.unAvailableRed},

    favIcon:{
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:RFValue(20),
    },
    favIconEnabled:{
        color:colors.iconEnabled,

    },
    favIconDisabled:{
        color:colors.iconDisabled,

    },
    favIconContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:38,
        height:38,
        borderRadius:19,
        zIndex:1,
        backgroundColor:'#FFFFFF',
        shadowColor: 'rgba(45, 87, 137, 0.25)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,


    },
    locationInfo:{
        backgroundColor:colors.backgroundLightGrey,
        position:'relative',
        top:-30,
        borderRadius:32,
        paddingVertical:30,
        marginBottom:-30,
    },
    infoHeader:{
        flexDirection:'row',
        paddingHorizontal:25,
        width:'100%',
    },
    locationTextContainer:{
        flexDirection:'row',
    },
    locationText:{
        fontSize:RFValue(12),
        color:colors.fontBlue,
        marginLeft:RFValue(2),
    },
    locationIcon:{
        fontSize:RFValue(13),
        color:colors.fontBlue,
        textAlignVertical:'center',
    },
    name:{
        fontSize:RFValue(26),
        fontWeight:'bold',
        color:colors.fontBlue,
        textAlignVertical:'center',
    },
    infoHeaderPic:{
        width:RFValue(40),
        height:RFValue(40),
        borderRadius:RFValue(20),
        marginRight:0,
        marginLeft:'auto',
        alignSelf:'center',
    },
    facilities:{
        flexDirection:'row',
        marginTop:10,
        paddingHorizontal:25,
    },
    facilityText:{
        color:colors.fontGrey,
        fontSize:RFValue(13),
    },
    dot:{
        fontSize:RFValue(20),
        textAlign:'center',
        textAlignVertical:'center',
        color:colors.iconCyan,
        marginHorizontal:5,
    },
    specsContainer:{
        flexDirection:'row',
        marginTop:10,
        paddingHorizontal:25,
    },
    specContainer:{
        flexDirection:'row',
    },
    specIcon:{
        fontSize:RFValue(18),
        color:colors.iconCyan,
        textAlignVertical:'center'
    },
    specText:{
        fontSize:RFValue(19),
        color:colors.fontGrey,
        marginLeft:RFValue(4),
        marginRight:RFValue(40),
    },
    categoriesContainer:{
        borderTopWidth:2,
        borderBottomWidth:2,
        borderColor:colors.fontGrey,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingVertical:10,
        marginTop:20,
    },
    categoryContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    categoryIcon:{
        fontSize:RFValue(30),
        color:colors.fontGrey,
    },
    categoryText:{
        fontSize:RFValue(12),
        color:colors.fontGrey,
    },
    selectedCategory:{
        color:colors.iconCyan,
    },
    descriptionHeader:{
        marginTop:25,
        paddingHorizontal:25,
        fontSize:RFValue(20),
        fontWeight:'bold',
        color:colors.fontBlue,

    },
    descriptionText:{
        marginTop :15,
        paddingHorizontal:25,
        fontSize:RFValue(12),
        color:colors._50black,
    },
    reserveContainer:{
        backgroundColor:colors.backgroundWhite,
        width:'100%',
        height:70,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    price:{
        fontSize:RFValue(24),
        fontWeight:'bold',
        color:colors.fontBlue,
        marginLeft:45,
    },
    reserveButton:{
        fontSize:RFValue(16),
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor:colors.backgroundStrongCyan,
        color:colors.backgroundWhite,
        marginRight:35,
        width:RFValue(170),
        height:40,
        borderRadius:10,
    },
});

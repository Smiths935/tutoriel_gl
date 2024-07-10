import {AnimationObject} from 'lottie-react-native'

export interface onboardingData{
    id:number;
    animation:AnimationObject;
    text:string;
    textColor:string;
    backgroundColor:string;
}

const DataOnboarding: onboardingData[]=[
    {
        id:1,
        animation:require('../animation/img3.json'),
        text:'Lorem Ipsum dolor Sit amet',
        textColor:"#005b4f",
        backgroundColor:'#ffa3ce'
    },
    {
        id:2,
        animation:require('../animation/cameraAnimation.json'),
        text:'Lorem Ipsum dolor Sit amet',
        textColor:"#1e2169",
        backgroundColor:'#bae4fd'
    },
    {
        id:3,
        animation:require('../animation/meeting.json'),
        text:'Lorem Ipsum dolor Sit amet',
        textColor:"#f15937",
        backgroundColor:'#faeb8a'
    },

]

export default DataOnboarding
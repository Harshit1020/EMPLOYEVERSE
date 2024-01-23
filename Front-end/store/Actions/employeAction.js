import axios  from "@/utiles/axios";
import{ 
    addemploye, removeemploye, iserorr , removerorr , addjobs , addinternships
 } from "../Reducers/employeReducer";

 export const asynccurrentemploye = () => async(dispatch , getState)=>{
     try {
        const {data} = await axios.post('/employe/current')
        // console.log(data);
        dispatch(addemploye(data));
    
     } catch (error) {

        dispatch(iserorr(error.response.data.message))
        
     }
 }

 export const asynctemployesignup = (employe) => async(dispatch , getState)=>{
    
    try {
        const {data} = await axios.post('/employe/signup' , employe)
        // console.log(data);
        dispatch(asynccurrentemploye());
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
    }

}

export const asynctemployesignin = (employe) => async(dispatch , getState)=>{
    
    try {
        const {data} = await axios.post('/employe/signin' , employe)
        // console.log(data);
        dispatch(asynccurrentemploye());
     
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
    }

}


export const asynctemployesignout = (employe) => async(dispatch , getState)=>{
    
    try {
        const {data} = await axios.get('/employe/signout')
        // console.log(data);
        dispatch(removeemploye())
     
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
    }

}




export const asynctemployeupdate = (employe) => async(dispatch , getState)=>{
    
    try {
        const {_id} = getState().employeReducer.employe;
        const {data} = await axios.post('/employe/update/' +_id , employe);
        dispatch(asynccurrentemploye())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}

export const asyncemployeorganizationLogo = (avatar) => async(dispatch , getState)=>{
    try {
        const {_id} = getState().employeReducer.employe;
        const {data} = await axios.post('/employe/avatar/' +_id , avatar);
        dispatch(asynccurrentemploye())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}

export const asyncemployeresetpassword = (passwod) => async(dispatch , getState)=>{
    try {
        const {_id} = getState().employeReducer.employe;
        const {data} = await axios.post('/employe/reset-password/' +_id , passwod);
        dispatch(asynccurrentemploye())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}


export const asyncemployeforgetpassword = (email) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/employe/send-mail/' ,email);
        dispatch(asynccurrentemploye())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}


export const asyncemployeotppassword = (pwd) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/employe/forget-link/' ,pwd);
        dispatch(asynccurrentemploye())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}


export const asyncalljobs = () => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/employe/alljob/');
        dispatch(addjobs(data.job))
        // console.log(data)
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}


export const asyncallinternships = () => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/employe/allinternship/');
        dispatch(addinternships(data.internship));
        // console.log(data)
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


export const asyncapplyjobemploye = (id) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/employe/apply/job/'+id);
        dispatch(asynccurrentemploye())
        dispatch(asyncalljobs())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}

export const asyncapplyinternshipemploye = (id) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/employe/apply/internship/'+id);
        dispatch(asynccurrentemploye())
        dispatch(asyncallinternships())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}
export const asynccreatejobemploye = (job) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/employe/job/create/' ,job);
        dispatch(asynccurrentemploye())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}


export const asynccreateinternshipemploye = (internship) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/employe/internship/create/' ,internship);
        dispatch(asynccurrentemploye())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}









import axios  from "@/utiles/axios";
import{ 
    addstudent, removestudent, iserorr , removerorr , addjobs , addinternships
 } from "../Reducers/studentReducer";

 export const asynccurrentstudent = () => async(dispatch , getState)=>{
     try {
        const {data} = await axios.post('/student')
        // console.log(data);
        dispatch(addstudent(data));
    
     } catch (error) {

        dispatch(iserorr(error.response.data.message))
        
     }
 }

 export const asynctstudentsignup = (student) => async(dispatch , getState)=>{
    
    try {
        const {data} = await axios.post('/student/signup' , student)
        // console.log(data);
        dispatch(asynccurrentstudent());
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
    }

}

export const asynctstudentsignin = (student) => async(dispatch , getState)=>{
    
    try {
        const {data} = await axios.post('/student/signin' , student)
        // console.log(data);
        dispatch(asynccurrentstudent());
     
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
    }

}


export const asynctstudentsignout = (student) => async(dispatch , getState)=>{
    
    try {
        const {data} = await axios.get('/student/signout')
        // console.log(data);
        dispatch(removestudent())
     
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
    }

}




export const asynctstudentupdate = (student) => async(dispatch , getState)=>{
    
    try {
        const {_id} = getState().studentReducer.student;
        const {data} = await axios.post('/student/update/' +_id , student);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}

export const asyncstudentavatar = (avatar) => async(dispatch , getState)=>{
    try {
        const {_id} = getState().studentReducer.student;
        const {data} = await axios.post('/student/avatar/' +_id , avatar);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}

export const asyncstudentresetpassword = (passwod) => async(dispatch , getState)=>{
    try {
        const {_id} = getState().studentReducer.student;
        const {data} = await axios.post('/student/reset-password/' +_id , passwod);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}


export const asyncstudentforgetpassword = (email) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/student/send-mail/' ,email);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}


export const asyncstudentotppassword = (pwd) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/student/forget-link/' ,pwd);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}


export const asyncalljobs = () => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/student/alljob/');
        dispatch(addjobs(data.job))
        // console.log(data)
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }

}


export const asyncallinternships = () => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/student/allinternship/');
        dispatch(addinternships(data.internship));
        // console.log(data)
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


export const asyncapplyjobstudent = (id) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/student/apply/job/'+id);
        dispatch(asynccurrentstudent())
        dispatch(asyncalljobs())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}

export const asyncapplyinternshipstudent = (id) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/student/apply/internship/'+id);
        dispatch(asynccurrentstudent())
        dispatch(asyncallinternships())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}



export const asysnaddeducation = (edu) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/add-edu' , edu);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


export const asyncdeleteeducation = (id) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/delete-edu/' + id);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}



export const asyncediteducation = (id , edu) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/edit-edu/' + id , edu);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}

// =====================job resume =================


export const asysnaddjob = (job) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/add-job' , job);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}



export const asyncdeletejob = (id) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/delete-job/' + id);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


export const asynceditjob = (id , job) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/edit-job/' + id , job);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


// =====================internship resume =================


export const asysnaddinternship = (intern) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/add-intern' , intern);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}



export const asyncdeleteinternship = (id) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/delete-intern/' + id);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


export const asynceditinternship = (id , intern) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/edit-intern/' + id , intern);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}

//================================ responbility resume ==========================

export const asysnaddresponsibility = (resp) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/add-resp' , resp);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}

export const asyncdeleteresponsebility = (id) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/delete-resp/' + id);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}

export const asynceditresponsibility = (id , resp) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/edit-resp/' + id , resp);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}

// ==========================course resume ===================

export const asysnaddcourse = (course) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/add-course' , course);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}

export const asyncdeletecourse = (id) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/delete-course/' + id);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}



export const asynceditcourse = (id , course) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/edit-course/' + id , course);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


// ========================project resume =====================================

export const asysnaddproject = (proj) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/add-proj' , proj);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


export const asyncdeleteproject = (id) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/delete-proj/' + id);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


export const asynceditproject = (id , proj) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/edit-proj/' + id , proj);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}

// ================================ skills resume==========================


export const asysnaddskills = (skill) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/add-skill' ,skill);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


export const asyncdeleteskills = (id) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/delete-skill/' + id);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


export const asynceditskills = (id , skill) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/edit-skill/' + id , skill);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}

//========================ACMP resume ==================


export const asysnaddacmp = (acmp) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/add-acmp' ,acmp);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


export const asyncdeleteacmp = (id) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/delete-acmp/' + id);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}


export const asynceditacmp = (id , acmp) => async(dispatch , getState)=>{
    try {
        const {data} = await axios.post('/resume/edit-acmp/' + id , acmp);
        dispatch(asynccurrentstudent())
    } catch (error) {
        dispatch(iserorr(error.response.data.message))
        console.log(error)
    }
}

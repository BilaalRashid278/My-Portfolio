import { useRef, useState } from 'react'
import { MdAddCircle } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { AddProjectHidden } from '../features/reducer.js'


const AddProject = () => {
  const [GetUrl, setGetUrl] = useState('');
  let AddSkills = [];
  const dispatch = useDispatch();
  const chooseFileRef = useRef(null);
  const chooseNameRef = useRef(null);
  const chooseDescriptionRef = useRef(null);
  const chooseSkillsRef = useRef(null);
  const AddAllDetailsProjects = () => {
    if (chooseNameRef.current.value == '' || chooseDescriptionRef.current.value == '' || AddSkills == '' || GetUrl == '') {
      console.log('Please Enter a Project Details');
      console.log(chooseNameRef.current.value)
      console.log(chooseDescriptionRef.current.value)
      console.log(AddSkills);
      console.log(GetUrl);
    } else {
      const DetailsObject = {
        name: chooseNameRef.current.value,
        description: chooseDescriptionRef.current.value,
        img_url: GetUrl,
        skills: AddSkills
      }
      const ConvertToJson = JSON.stringify(DetailsObject);
      console.log(ConvertToJson);
      chooseNameRef.current.value = ''
      chooseDescriptionRef.current.value = ''
      dispatch(AddProjectHidden());
    }
  };
  const CancelAddProject = () => {
    chooseNameRef.current.value = ''
    chooseDescriptionRef.current.value = ''
    dispatch(AddProjectHidden());
  };
  return (
    <div className='flex flex-col gap-4 w-[90%] m-auto py-3'>
      <div className='w-[100%]'>
        <input ref={chooseNameRef} className='w-[100%] outline-none px-3 py-1 rounded-sm' type="text" placeholder='Project Name' />
      </div>
      <div className='w-[100%]'>
        <textarea ref={chooseDescriptionRef} className='w-[100%] outline-none px-3 py-1 rounded-sm resize-none h-[150px]' type="text" placeholder='Project Description'></textarea>
      </div>
      <div className='w-[100%] flex items-center'>
        <input ref={chooseSkillsRef} className='w-[80%] outline-none px-3 py-1 rounded-sm ' type="text" placeholder='Add Skills one by one' />
        <span onClick={() => {
          if (chooseSkillsRef.current.value !== '') {
            AddSkills.push(chooseSkillsRef.current.value);
            console.log(AddSkills);
          } else {
            console.log("Input is empty");
          }
        }} className='mx-5 text-3xl text-white cursor-pointer'><MdAddCircle /></span>
      </div>
      <input onChange={() => {
        const fileUrl = URL.createObjectURL(chooseFileRef.current.files[0]);
        setGetUrl(fileUrl);
      }} ref={chooseFileRef} type='file' className='hidden' />
      <button className='bg-white  text-black py-1 max-w-[100px] rounded-sm' onClick={() => {
        chooseFileRef.current.click()
      }}>Add Image</button>
      <div className='flex gap-3 justify-end mt-5'>
        <button onClick={CancelAddProject} className='bg-white  text-black py-1 w-[60px] rounded-sm'>Cancel</button>
        <button onClick={AddAllDetailsProjects} className='bg-white  text-black py-1 w-[60px]  rounded-sm'>Add</button>
      </div>
    </div>
  )
}

export default AddProject

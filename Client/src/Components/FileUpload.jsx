import React from 'react'

const FileUpload = () => {
  return (
    <div className='border border-neutral-500 h-[530px] w-3xl rounded-4xl p-6'>
<h4 className='text-2xl text-white text-shadow-2xs text-shadow-amber-100 leading-13'>Upload Your Resume</h4>
<p className='text-neutral-500'>Make the file format meets the requirements.It must be .pdf or .doc</p>
<div className='border border-neutral-400 h-80 rounded-2xl mt-7'></div>
<div className='text-white'>
<button className='bg-neutral-700/65 py-2 px-3 rounded-xl m-3'>Cancel</button>
<button className='py-2 px-3 rounded-xl bg-indigo-500 hover:bg-indigo-700'>Submit</button>
</div>
    </div>
  )
}

export default FileUpload
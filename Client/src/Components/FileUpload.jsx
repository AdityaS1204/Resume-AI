import { useDropzone } from 'react-dropzone'
import { useCallback, useState } from 'react';
import { File } from 'lucide-react';
const FileUpload = () => {
    const [fileName, setFileName] = useState('')

  const cancelUpload = () => {
setFileName("")
  }
    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setFileName(acceptedFiles[0].name);
        }
    }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc', '.docx']
        },
        multiple: false
    });


    //   const files = acceptedFiles.map(file => (
    //     <li key={file.path}>
    //       {file.path} - {file.size} bytes
    //     </li>
    //   ));

    return (
        <div className='border border-neutral-500 md:h-[530px] h-96 md:w-3xl w-82 rounded-4xl p-6'>
            <h4 className='md:text-2xl text-lg text-white text-shadow-2xs text-shadow-amber-100 leading-13'>Upload Your Resume</h4>
            <p className='text-neutral-500'>Make the file format meets the requirements.It must be .pdf or .doc</p>
            <div {...getRootProps({ className: `dropzone md:h-80 md:w-[720px] h-34 w-72 border-2 border-dotted border-neutral-400 p-3 rounded-2xl mt-7 flex items-center justify-center ${isDragActive ? ('bg-neutral-900'):(' ')}` })}>
                <input {...getInputProps()} />
                <p className='text-neutral-500'> {fileName ? (

                    <div className='border border-neutral-500 rounded-2xl flex gap-1 p-2 text-white'><File className='' color='white' size={'26px'}/>{fileName} </div>
                ) : isDragActive ? (
                    <p className='text-neutral-400'>Drop your file here</p>
                ) : (
                    <p>Click here to select file or Drag n Drop here</p>
                )}</p>
            </div>
            <div className='text-white'>
                <button className='bg-neutral-700/65 py-2 px-3 rounded-xl m-3 cursor-pointer' onClick={cancelUpload}>Cancel</button>
                <button className='py-2 px-3 rounded-xl bg-indigo-500 hover:bg-indigo-700 cursor-pointer'>Submit</button>
            </div>
        </div>
    )
}

export default FileUpload
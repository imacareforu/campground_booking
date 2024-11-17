export default function InputAndLabel({label,placeHolder,id}:{label:string,placeHolder:string,id:string}){
    return (
        <div className="flex items-center w-full my-2 px-3">
            <label className="w-28 block text-gray-700 pr-4" htmlFor={id}>{label}</label>
            <input type='text' required id={id} name={id} placeholder={placeHolder} 
            className="bg-white border-2 rounded-md w-full px-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
        </div>
    )
}
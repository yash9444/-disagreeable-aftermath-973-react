import './Dropdown.css'

export default function Dropdown({label,names}){
    return <div className="dropdown">{label}
        <div>{
            names.map((el)=>{
                return <div className="dropdown-element">{el}</div>  
            })}
        </div>
    </div>
}


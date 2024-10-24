export default function MenuDropdown({openService,each}){
    return(
    
        openService &&(
            <div>
                <p>{each}</p>
            </div>
        )
    )
}

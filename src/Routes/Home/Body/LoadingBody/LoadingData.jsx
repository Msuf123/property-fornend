import './LoadingData.css'
export default function LoaddingData(){
    return (
        <div className='outerDiv'>
            {[...Array(2)].map((_, index) => (
                <div key={index} className='loaingElemnts'>
                    
                </div>
            ))}
        </div>
    )
}
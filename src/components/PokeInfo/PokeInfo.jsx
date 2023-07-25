import InfoItem from "./InfoItem"

const PokeInfo = () => {
    return(
        <div className="Info__List">
            <InfoItem text={'Speed'} value={60}/>
            <InfoItem text={'Special Defense'} value={150}/>
            <InfoItem text={'Special Attack'} value={240}/>
            <InfoItem text={'Defense'} value={10}/>
            <InfoItem text={'Attack'} value={230}/>
            <InfoItem text={'Hp'} value={180}/>
        </div>
    )
}

export default PokeInfo
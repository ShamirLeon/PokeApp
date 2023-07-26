import Heart from '../../assets/heart.gif'

const Atributtion = (params) => {
    return(
        <div className='Atributtion'>
            <p>Made with </p>
            <img src={Heart} />
            <p>by</p>
            <a href="https://github.com/ShamirLeon" target='_blank'>Shamir León🦁</a>
        </div>
    )
}

export default Atributtion
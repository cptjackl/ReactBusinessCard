export default function Info(){
    return(
        <>
            <img src="/src/assets/profile.png" alt="profile image" />
            <h1>Jack Loder</h1>
            <span>Web Developer</span>
            <p>cptjackl.com</p>
            <div className="buttons-box">
                <button className="button-email"> <img src="/src/assets/icon-mail.png" alt="" /> Email</button>
                <button className="button-linkedin"> <img src="/src/assets/icon-linkedin.png" alt="" /> LinkedIn</button>
            </div>
        </>
    )
}
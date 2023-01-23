import { FC } from "react";
import { profile } from "../../assets/Icons"

interface UserCardProps {
    email: string,
    position: string,
    url?: string
}
const UserCard: FC<UserCardProps> = ({email, position, url }) => {

    return (
        <div className="left">
            <div>
                <div className="profile-image">
                    {url ? <img src={url} alt="U." /> : <>{profile} </>}
                </div>
            </div>
            <div className="name-role">
                <p>{email}</p>
                <p>{position}</p>
            </div>
        </div>
    )
}

export default UserCard;
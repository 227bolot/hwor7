import Avatar from "../Component/Avatar"
import UserName from "../Component/UserName"
import Text from "../Component/Text"
import NewDate from "../Component/NewDate"
import Wrapper from "../UI/Wrapper"
import Wrapper1 from "../UI/Wrapper1"
import '../UI/Wrapper.css'

function Comment(props){
    return(
        <div>
        <Wrapper1>
        <Avatar author={props.author}/>
        <UserName author={props.author} />
        </Wrapper1>

        <Wrapper >
        <Text text={props.text}/>
        <NewDate date={props.date}/>
        </Wrapper>
        </div>
    )
}
export default Comment
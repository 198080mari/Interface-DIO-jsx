import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return ( <>  
    <Header autenticado={true} />
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={80} nome='Mariana Cruz' image='https://avatars.githubusercontent.com/u/161047430?v=4'/>
            <UserInfo percentual={50} nome='Mariana Cruz' image='https://avatars.githubusercontent.com/u/161047430?v=4'/>
            <UserInfo percentual={60} nome='Mariana Cruz' image='https://avatars.githubusercontent.com/u/161047430?v=4'/>
            <UserInfo percentual={70} nome='Mariana Cruz' image='https://avatars.githubusercontent.com/u/161047430?v=4'/>
            <UserInfo percentual={80} nome='Mariana Cruz' image='https://avatars.githubusercontent.com/u/161047430?v=4'/>
       </Column>
    </Container>
    </>)  //brackets fechadas pq tem 2 componentes ao lado do outro
}
export { Feed }
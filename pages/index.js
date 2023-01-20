import Head from "next/head";
import { Text, Link, Navbar, Spacer, Divider, Button,Container,Row,Table,Image,Collapse,Card,Col,Grid} from "@nextui-org/react";
import games from "../content/games";

const Stats = ({title, body}) => {
    return (
    <Card blur="true" isPressable iscompact="true" isHoverable isblurred="true" variant="bordered" css={{padding: 2, bgBlur: "#0f111466"}}>
        <Card.Header><Text h2 color="secondary">{title}</Text></Card.Header>
        <Card.Body><Text h4 color="primary" >{body}</Text></Card.Body>
    </Card>
    )
}

export const Card4 = (name,img,link,crackof,repackof) => (
    <Card css={{ w: "100%", h: "400px"}} isBlurred blur>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
            <Text size={12} weight="bold" transform="uppercase" color="success">
            New
            </Text>
            <Text h3 color="secondary">
            {name}
            </Text>
        </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
        <Card.Image
            src={img}
            width="100%"
            height="100%"
            autoResize
            alt={name}
        />
        </Card.Body>
        <Card.Footer
        isBlurred
        css={{
            position: "absolute",
            bgBlur: "#ffffff66",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
        }}
        >
        <Row>
            <Col>
            <Text color="#000" size={12}>
                Cracked By : {crackof}
            </Text>
            <Text color="#000" size={12} href={link}>
                Repacked By : {repackof}
            </Text>
            </Col>
            <Col>
            <Row justify="flex-end" href={link}>
                <Button flat auto rounded color="secondary">
                <Link href={link} passHref>
                    <Text
                        css={{ color: "white" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                    >
                        Go to repack.
                    </Text >
                </Link>
                </Button>
            </Row>
            </Col>
        </Row>
        </Card.Footer>
    </Card>
);



export default function Home() {
    return (
        <>
            <Head>
                <title>T-Crack</title>
            </Head>
            <Navbar variant="floating">
                <Navbar.Brand>
                    <Text h3 css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>Lumatozer + Autm</Text>
                </Navbar.Brand>
                <Navbar.Content activeColor="secondary">
                <Navbar.Link isActive href="/">Home</Navbar.Link>
                </Navbar.Content>
            </Navbar>
            <Spacer y={2}></Spacer>
            <Container>
                <Text h1 css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}} weight="bold">
                    The new crackwatch,
                </Text>
                <Text h1 css={{textGradient: "45deg, $yellow600 -20%, $red600 100%",}} weight="bold">
                    With Real time Updates.
                </Text>
                <Spacer/>
                <Text h4>User Friendly, Ever Expanding Ecosystem of new games and free to use.</Text>
                <Spacer y={2}/>
                <Row gap={1}>
                        <Stats title="24/7" body="Uptime"/>
                        <Spacer/>
                        <Stats title="4 times" body="faster updates"/>
                        <Spacer/>
                        <Stats title="Beta" body="Currently In Beta!"/>
                </Row>
                <Spacer y={2}/>
                <Divider/>
                <Spacer/>

                <Grid.Container gap={2} justify="center">
                    {games.map((x) => {
                        return (
                            <>
                            <Grid xs={6} sm={3}>
                            {Card4(x.name,x.img,x.link,x.crackedby,x.repack)}
                        </Grid>
                            </>
                        )
                    })}
                    
                </Grid.Container>

                <Text h2 color="primary" css={{"text-align":"center"}}>The Team</Text>
                <Spacer/>
                <Table>
                    <Table.Header>
                        <Table.Column>NAME</Table.Column>
                        <Table.Column>ROLE</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell><Link block color="success" href="https://github.com/aludayalu/" target='_blank'>Aarav Dayal</Link></Table.Cell>
                            <Table.Cell>Co-Founder</Table.Cell>
                        </Table.Row>
                        <Table.Row key="2">
                            <Table.Cell><Link block color="success" target='_blank'>Tanmay Malpani</Link></Table.Cell>
                            <Table.Cell>Co-Founder</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <Spacer/>
            </Container>
        </> 
    )
}
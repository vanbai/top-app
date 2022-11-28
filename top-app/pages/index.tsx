import { Button, Htag, P, Tag } from "../components";


export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">Заголовок</Htag>
            <Button appearance="primary">Кнопка</Button>
            <Button appearance="ghost" arrow='right'>Кнопка</Button>
            <P>Средний п</P>
            <P size="s">Маленький п</P>
            <P size="l">Большой п</P>
            <Tag size="s">ghost</Tag>
            <Tag size="m" color="red">red</Tag>
            <Tag size="m" color="green">green</Tag>
            <Tag size="s" color="primary">primary</Tag>
            <Tag size="m" color="grey">grey</Tag>
        </>
    );
}

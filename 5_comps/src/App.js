import Accordion from "./components/Accordion";

function App() {
    const items = [
        // contains array of objects
        {
            label: 'Can I use React on a Project?',
            content: 'You can use React on anyproject you want'

        },
        {
            label: 'Can I use JavaScript on a Project?',
            content: 'You can use JavaScript on anyproject you want'
        },
        {
            label: 'Can I use CSS on a Project?',
            content: 'You can use CSS on anyproject you want'
        }
    ];
    return <Accordion items={items} />
}

export default App;

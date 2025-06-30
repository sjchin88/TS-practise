import ListComponent from './components/ListComponent'

function App() {
    const items = ['JavaScript', 'PHP', 'Python', 'Swift']
    const frameworks = ['Laravel', 'Ruby on Rails', 'Django']
    const handleOnSelectItem = (item:string) => {
      alert(item + ' was selected.') 
    }
    return (
        <>
            <div className="flex flex-col">
                <ListComponent items={items} onSelectItem={handleOnSelectItem}>
                  <h2>Programming 2Language</h2>
                </ListComponent>
                <ListComponent items={frameworks} onSelectItem={handleOnSelectItem}>
                  <h2>Framework</h2>
                </ListComponent>
            </div>
        </>
    )
}

export default App

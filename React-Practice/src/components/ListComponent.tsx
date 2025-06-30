import { useState, type ReactNode } from 'react'

interface ListProps {
    children: ReactNode
    items: string[]
    onSelectItem: (item: string) => void
}

const ListComponent = ({ children, items, onSelectItem }: ListProps) => {
    const [selectedItem, setSelectedItem] = useState(0)

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-2">{children}</h1>
                <ul className="w-1/2 border border-gray-200 rounded-lg divide-y divide-gray-300 overflow-hidden">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={
                                selectedItem === index
                                    ? 'py-2 px-3 bg-gray-800 text-white'
                                    : 'py-2 px-3'
                            }
                            onClick={() => {
                                setSelectedItem(index)
                                onSelectItem(item)
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ListComponent

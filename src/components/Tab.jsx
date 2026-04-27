import './Tab.css'

export default function Tab({tabs, activeTab, setActiveTab}){
    return(
        <button className={`tab ${activeTab === tabs.name ? 'active' : undefined}`} onClick={setActiveTab}>
            <img src={tabs.icon} alt="" />
        </button>
    )
}
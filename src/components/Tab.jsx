import PropTypes from 'prop-types'
import './Tab.css'

export default function Tab({tabs, activeTab, setActiveTab}){
    return(
        <button className={`tab ${activeTab === tabs.name ? 'active' : undefined}`} onClick={setActiveTab}>
            <img src={tabs.icon} alt="" />
        </button>
    )
}

Tab.propTypes = {
    tabs: PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }).isRequired,
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
}
import { connect } from 'react-redux'
import Home from './Home'
export default connect((state) => state.catCatalogue)(Home)

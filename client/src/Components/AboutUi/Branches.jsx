import { branches } from '../../data/branches'
import BranchesSection from '../Helpers/BranchesCard'
import Footer from '../Helpers/Footer'

function Branches() {
  return (
    <div className=''>
        <BranchesSection data={branches} />

      <Footer />
    </div>
  )
}

export default Branches

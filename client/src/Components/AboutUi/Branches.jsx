import { branches } from '../../data/branches'
import { useFetchBranches } from '../../Helpers/fetch.hooks'
import BranchesSection from '../Helpers/BranchesCard'
import Footer from '../Helpers/Footer'
import Spinner from '../Helpers/Spinner'

function Branches({ hideFooter }) {
  const { data, isFetching } = useFetchBranches()
  const branchesData = data || []
  return (
    <div className=''>
      {
        isFetching ? (
          <Spinner />
        ) : (
          <BranchesSection data={branchesData} />
        )
      }

    {
        !hideFooter && (
            <Footer />
        )
    }
    </div>
  )
}

export default Branches

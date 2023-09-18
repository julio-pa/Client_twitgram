import { connect } from "react-redux"
import { motion } from 'framer-motion'

function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="flex justify-between bg-gradient-to-b from-gray-900 from-30% to-cyan-700 pt-6 h-screen overflow-scroll"
    >
      {children}
    </motion.div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Layout)
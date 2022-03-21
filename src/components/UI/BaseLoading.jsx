import React from 'react'
import '@styles/UI/BaseLoading.scss'

const BaseLoading = () => (
  <div className="lds-content">
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  </div>
)

export default BaseLoading
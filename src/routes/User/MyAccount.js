import React, { Component } from 'react'
import { connect } from 'dva'
import { ShowJsonTip, Input } from '@components'
import { classNames, _, Patterns } from '@utils'
import { PATH } from '@constants'
import styles from './index.less'

@connect(({ user: model, loading, dispatch }) => ({
  model,
  modelName: 'user',
  dispatch
}))
export default class View extends Component {
  render() {
    return (
      <div >我的账户</div >
    )
  }
}


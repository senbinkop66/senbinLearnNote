import React from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'

export defult class AntdButton extends React.component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		// 初始化事件
		this.props.OnInitialize && this.props.OnInitialize({})
	}

	onBtnClick = (e) => {
		this.props.onClick && this.props.onClick(e)
	}
	

	render() {
		let { visible, content, block, danger, disabled, ghost, href, target, loading, shape, size, type } = this.props
		return visible ? <Button 
				onClick={this.onBtnClick}
				block={block}
				danger={danger}
				disabled={disabled}
				ghost={ghost}
				href={href}
				target={target}
				loading={loading}
				shape={shape}
				size={size}
				type={type}
			>{ content }</Button> : null
	}
}

let defaultProps = {
	visible: true,
	content: '按钮',
	block: false,
	danger: false,
	disabled: false,
	ghost: false,
	loading: false,
	size: 'middle',
	type:'default'
}

AntdButton.defaultProps = defaultProps
import './index.scss'

export default class PrototypeButton {
  public _el: HTMLElement
  protected _id: string
  protected _label: string
  protected _icon: string
  protected isActivate: boolean
  protected _protobtnClick: () => void
  protected _protobtnMouseEnter: () => void
  protected _protobtnMouseLeave: () => void

  /**
   *
   * @param id 该buttond 的id
   * @param label tooltip中的信息
   * @param icon 图像资源，我这里是svg
   * @param onClick 点击事件
   */
  constructor(id: string, label: string, icon: string, onClick: () => void) {
    const that = this
    that._el = document.createElement('div')
    that._id = id
    that._label = label
    that._icon = icon
    that.isActivate = false
    that._protobtnClick = onClick

    that._protobtnMouseEnter = () => {
      // tooltip
      that._el.children[0].classList.remove('richText-toolbar-button-tooltip-inactive')
      that._el.children[0].classList.add('richText-toolbar-button-tooltip-active')
    }
    that._protobtnMouseLeave = () => {
      that._el.children[0].classList.remove('richText-toolbar-button-tooltip-active')
      that._el.children[0].classList.add('richText-toolbar-button-tooltip-inactive')
    }
    that.init(that._el)
  }

  public init(el: HTMLElement) {
    const that = this
    // button
    el.classList.add('richText-toolbar-button')
    el.id = that._id
    el.addEventListener('click', () => {
      that.isActivate = !that.isActivate
      if (that.isActivate) {
        el.classList.add('richText-toolbar-button-active')
      } else {
        el.classList.remove('richText-toolbar-button-active')
      }
    })

    // tooltip
    const tootip = document.createElement('div')
    tootip.innerText = that._label
    tootip.classList.add('richText-toolbar-button-tooltip')
    tootip.classList.add('richText-toolbar-button-tooltip-inactive')
    el.appendChild(tootip)

    // tooltip event
    el.addEventListener('mouseenter', that._protobtnMouseEnter)
    el.addEventListener('mouseleave', that._protobtnMouseLeave)
    el.addEventListener('click', that._protobtnClick)

    // icon
    const icon = document.createElement('div')
    icon.classList.add('richText-toolbar-button-icon')
    icon.innerHTML = that._icon
    el.appendChild(icon)
  }
}

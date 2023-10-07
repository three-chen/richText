import PrototypeButton from './prototype_button'

// import { buttonActivateState, richTextState } from '@/store/richTextStore'

const imgaeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="15" y1="8" x2="15.01" y2="8"></line><rect x="4" y="4" width="16" height="16" rx="3"></rect><path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5"></path><path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2"></path></svg>`

class ImageButton extends PrototypeButton {
  constructor() {
    super({ id: 'image', label: 'image', type: "input" }, imgaeSVG, async () => {
      // buttonActivateState.isImage = !buttonActivateState.isImage

      const inputEl = this._el.lastChild as HTMLInputElement

      inputEl.addEventListener('change', async (event: Event) => {
        // @ts-ignore
        const selectedFile = event.target.files[0];
        await this.getLocalImage(selectedFile)
      });
      inputEl.click()

    })
  }

  // 打开文件读取器，拿到用户选中的文件
  public async getLocalImage(selectedFile: File) {
    const that = this

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageSrc = e.target.result as string;
      console.log(imageSrc);
      that.showImage(imageSrc)
    };
    reader.readAsDataURL(selectedFile);
  }

  public showImage(imageSrc: string) {
    const imageEl = this._el.lastChild as HTMLImageElement
    imageEl.src = imageSrc
    imageEl.style.display = "block"
    imageEl.style.width = "100%"
  }
}

export default new ImageButton()

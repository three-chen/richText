// // 定义初始状态
// interface ButtonActivateState {
//     isBold: Boolean,
//     isUl: Boolean,
//     isImage: Boolean,
// }

// let richTextState: string = 'Normal';

// const buttonActivateState: ButtonActivateState = new Proxy({
//     isBold: false,
//     isUl: false,
//     isImage: false,
// },
//     {
//         set: function (target, prop, value) {
//             // 在属性被修改前保存原始值
//             const oldValue = target[prop];

//             // 修改属性的值
//             target[prop] = value;

//             // 根据属性的修改触发相应的函数来更新 richTextState
//             handleRichTextState(`${value ? '' : 'un'}` + prop.toString().slice(2));

//             return true; // 表示属性修改成功
//         },
//     }
// )

// function handleRichTextState(changeState: string) {
//     console.log("handleRichTextState param", changeState);
//     switch (richTextState) {
//         case 'Normal':
//             if (changeState === 'Bold') {
//                 console.log(document.execCommand('bold', false, null));

//                 richTextState = 'Bold';
//             } else if (changeState === 'Ul') {
//                 document.execCommand('insertUnorderedList', false, null);
//                 richTextState = 'Ul';
//             }
//             break;
//         case 'Bold':
//             if (changeState === 'unBold') {
//                 document.execCommand('bold', false, null);
//                 richTextState = 'Normal';
//             } else if (changeState === 'Ul') {
//                 document.execCommand('insertUnorderedList', false, null);
//                 richTextState = 'Ul Bold';
//             }
//             break;
//         case 'Ul':
//             if (changeState === 'Bold') {
//                 document.execCommand('bold', false, null);
//                 richTextState = 'Ul Bold';
//             } else if (changeState === 'unUl') {
//                 document.execCommand('insertUnorderedList', false, null);
//                 richTextState = 'Normal';
//             }
//             break;
//         case 'Ul Bold':
//             if (changeState === 'unBold') {
//                 document.execCommand('bold', false, null);
//                 richTextState = 'Ul';
//             } else if (changeState === 'unUl') {
//                 document.execCommand('insertUnorderedList', false, null);
//                 richTextState = 'Bold';
//             }
//             break;

//         default:
//             break;
//     }
// }


// // 定义选区状态
// interface SelectionState {
//     startEl: Node | null,
//     startElIndex: number | null,
//     endEl: Node | null,
//     endElIndex: number | null,
//     type: string,
// }

// const selectionState: SelectionState = {
//     startEl: null,
//     startElIndex: null,
//     endEl: null,
//     endElIndex: null,
//     type: '',
// };

// function setSelectionState(selection: Selection) {
//     // console.log("proto selection", selection.getRangeAt(0));

//     selectionState.startEl = selection.anchorNode;
//     selectionState.startElIndex = selection.anchorOffset;
//     selectionState.endEl = selection.focusNode;
//     selectionState.endElIndex = selection.focusOffset;
//     selectionState.type = selection.type;
// }

// export {
//     buttonActivateState,
//     selectionState,
//     richTextState,
//     setSelectionState
// }
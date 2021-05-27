import { Button, Container } from '@material-ui/core'
import { RichUtils } from 'draft-js'
import React from 'react'

const EditorToolbar = ({ setEditorState, editorState, toolbarClass, buttonClass }) => {

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
  }

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
  }

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
  }

  const onH1click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'header-one'))
  }

  const onH2click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'header-two'))
  }
  
  const onH3click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'header-three'))
  }

  const onH4click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'header-four'))
  }

  const onH5click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'header-five'))
  }

  const onH6click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'header-six'))
  }

  const onBlockquoteclick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'blockquote'))
  }

  const onCodeblockClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'code-block'))
  }

  const onUlClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, '** -'))
  }

  return (
    <>
      <div className={toolbarClass}>
        <Container>
          <Button className={buttonClass} onClick={onH1click}><strong> H1 </strong></Button>
          <Button className={buttonClass} onClick={onH2click}><strong> H2 </strong></Button>
          <Button className={buttonClass} onClick={onH3click}><strong> H3 </strong></Button>
          <Button className={buttonClass} onClick={onH4click}><strong> H4 </strong></Button>
          <Button className={buttonClass} onClick={onH5click}><strong> H5 </strong></Button>
          <Button className={buttonClass} onClick={onH6click}><strong> H6 </strong></Button>
          <Button className={buttonClass} onClick={onUlClick}><strong> UL </strong></Button>
          <Button className={buttonClass} onClick={onUlClick}><strong> OL </strong></Button>
          <Button className={buttonClass} onClick={onBlockquoteclick}><strong> Blockquote </strong></Button>
          <Button className={buttonClass} onClick={onCodeblockClick}><strong> Code Block </strong></Button>
          <Button className={buttonClass} onClick={onBoldClick}><strong> Bold </strong></Button>
          <Button className={buttonClass} onClick={onItalicClick}><strong> Italic </strong></Button>
          <Button className={buttonClass} onClick={onUnderlineClick}><strong> Underline </strong></Button>
          <hr />
        </Container>
      </div>
    </>
  )
}

export default EditorToolbar
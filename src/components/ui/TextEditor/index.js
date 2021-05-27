import React from 'react'
import { Editor, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'
import EditorToolbar from './EditorToolbar'
import { Container } from '@material-ui/core'

export const TextEditor = ({ editorState, setEditorState, toolbarClass,
  buttonClass, editorClass }) => {

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  return (
    <>
      <div>
        <EditorToolbar
          setEditorState={setEditorState}
          editorState={editorState}
          toolbarClass={toolbarClass}
          buttonClass={buttonClass}
        />
        <div className={editorClass}>
          <Container>
            <Editor
              placeholder={'Type Text...'}
              editorState={editorState}
              onChange={setEditorState}
              handleKeyCommand={handleKeyCommand}
            />
          </Container>
        </div>
      </div>
    </>
  )
}

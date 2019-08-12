/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */

const axios = require('axios')
const url = '' // Set Incoming webhook URL

exports.onRanBuild = (event, context) => {
  const pubsubMessage = event.data
  const data = JSON.parse(Buffer.from(pubsubMessage, 'base64').toString())
  if (!data.source || !data.source.repoSource) {
    return
  }
  const attachmentData = {
    fields: [
      {
        title: 'Project ID',
        value: data.projectId,
        short: true
      },
      {
        title: 'Branch',
        value: data.source.repoSource.branchName,
        short: true
      },
      {
        title: 'Log URL',
        value: data.logUrl,
        short: false
      }
    ]
  }
  switch (data.status) {
    case 'WORKING': {
      axios.post(url, {
        attachments: [
          {
            text: 'Deploy start',
            ...attachmentData
          }
        ]
      })
      break
    }
    case 'SUCCESS': {
      axios.post(url, {
        attachments: [
          {
            text: 'Deploy complete',
            color: '#00c853',
            ...attachmentData
          }
        ]
      })
      break
    }
    case 'FAILED': {
      axios.post(url, {
        attachments: [
          {
            text: 'Deploy failed',
            color: '#ff1744',
            ...attachmentData
          }
        ]
      })
      break
    }
  }
}

/*
  Copyright 2017~2022 The Bottos Authors
  This file is part of the Bottos Data Exchange Client
  Created by Developers Team of Bottos.

  This program is free software: you can distribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with Bottos. If not, see <http://www.gnu.org/licenses/>.
*/
export const ADD_FILE = 'ADD_FILE'
export const DELETE_FILE = 'DELETE_FILE'
export const UPDATE_FILE = 'UPDATE_FILE'
export const UPDATE_UPLOAD_PROGRESS = 'UPDATE_UPLOAD_PROGRESS'
export const UPDATE_FILELIST = 'UPDATE_FILELIST'


// 这里是用来存储文件上传信息的，如果
const unDoneFiles = 'unDoneFiles'


var unDoneFilesCache = null;
function getCacheFileState() {
  if (!Array.isArray(unDoneFilesCache)) {
    let filesGuidArr = localStorage.getItem(unDoneFiles)
    unDoneFilesCache = filesGuidArr ? JSON.parse(filesGuidArr) : []
  }
  return unDoneFilesCache;
}

function cacheFileState({guid, path, status, name}) {
  let filesGuidArr = getCacheFileState()
  if (status == 'done') {
    // 传完了之后，就从数组当中去掉
    let arr = filesGuidArr.filter(file => file.guid != guid)
    localStorage.setItem(unDoneFiles, JSON.stringify(arr))
  } else if (status != 'done') {
    // 没有传完
    // 从记录当中找到了
    if (filesGuidArr.findIndex(file => file.guid == guid) > -1) {
      return ;
    }
    filesGuidArr.push({guid, path, name})
    // console.log('filesGuidArr', filesGuidArr);
    let data = JSON.stringify(filesGuidArr)
    localStorage.setItem(unDoneFiles, data)
  } else {
    console.error('cacheFileState error', file);
  }
}


function fileKeysFilter(file) {
  const { id, name, status, guid, remaning, size, blocks } = file
  const path = file.path || file.getSource().getSource().path
  return { id, name, status, guid, remaning, size, blocks, path }
}

export function addFile(file) {
  return {
    type: ADD_FILE,
    file: fileKeysFilter(file)
  };
};

export function deleteFile(f) {
  var fid = ''
  if (typeof f == 'string') {
    fid = f
  } else if (typeof f == 'object') {
    fid = f.id
  }
  return {
    type: DELETE_FILE,
    fid
  };
};

export function updateFile(file) {
  // console.log('updateFile', file);
  cacheFileState(fileKeysFilter(file))
  return {
    type: UPDATE_FILE,
    file: fileKeysFilter(file)
  };
};

export function updateUploadProgress(guid, percent) {
  return {
    type: UPDATE_UPLOAD_PROGRESS,
    guid, percent
  };
};

export function updateFileList(fileList) {
  return {
    type: UPDATE_FILELIST,
    fileList
  };
};

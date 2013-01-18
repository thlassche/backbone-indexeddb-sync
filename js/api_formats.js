/**
 * @fileoverview About this file.
 *
 * @link https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest
 */

var api_format = {};

api_format.tasks = {
  "kind": "discovery#restDescription",
  "etag": "\"zZ6SZIrxjkCWan0Pp0n2ulHSaJk/-FRO-hzZfDWPF3fu3VkP7b9BOUQ\"",
  "discoveryVersion": "v1",
  "id": "tasks:v1",
  "name": "tasks",
  "version": "v1",
  "revision": "20111027",
  "title": "Tasks API",
  "description": "Lets you manage your tasks and task lists.",
  "icons": {
    "x16": "http://www.google.com/images/icons/product/tasks-16.png",
    "x32": "http://www.google.com/images/icons/product/tasks-32.png"
  },
  "documentationLink": "http://code.google.com/apis/tasks/v1/using.html",
  "protocol": "rest",
  "baseUrl": "https://www.googleapis.com/tasks/v1/",
  "basePath": "/tasks/v1/",
  "rootUrl": "https://www.googleapis.com/",
  "servicePath": "tasks/v1/",
  "batchPath": "batch",
  "parameters": {
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "default": "json",
      "enum": [
        "json"
      ],
      "enumDescriptions": [
        "Responses with Content-Type of application/json"
      ],
      "location": "query"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response.",
      "location": "query"
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.",
      "location": "query"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user.",
      "location": "query"
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks.",
      "default": "true",
      "location": "query"
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.",
      "location": "query"
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits.",
      "location": "query"
    }
  },
  "auth": {
    "oauth2": {
      "scopes": {
        "https://www.googleapis.com/auth/tasks": {
          "description": "Manage your tasks"
        },
        "https://www.googleapis.com/auth/tasks.readonly": {
          "description": "View your tasks"
        }
      }
    }
  },
  "schemas": {
    "Task": {
      "id": "Task",
      "type": "object",
      "properties": {
        "completed": {
          "type": "string",
          "description": "Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.",
          "format": "date-time"
        },
        "deleted": {
          "type": "boolean",
          "description": "Flag indicating whether the task has been deleted. The default if False."
        },
        "due": {
          "type": "string",
          "description": "Due date of the task (as a RFC 3339 timestamp). Optional.",
          "format": "date-time"
        },
        "etag": {
          "type": "string",
          "description": "ETag of the resource."
        },
        "hidden": {
          "type": "boolean",
          "description": "Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only."
        },
        "id": {
          "type": "string",
          "description": "Task identifier."
        },
        "kind": {
          "type": "string",
          "description": "Type of the resource. This is always \"tasks#task\".",
          "default": "tasks#task"
        },
        "links": {
          "type": "array",
          "description": "Collection of links. This collection is read-only.",
          "items": {
            "type": "object",
            "properties": {
              "description": {
                "type": "string",
                "description": "The description. In HTML speak: Everything between \u003ca\u003e and \u003c/a\u003e."
              },
              "link": {
                "type": "string",
                "description": "The URL."
              },
              "type": {
                "type": "string",
                "description": "Type of the link, e.g. \"email\"."
              }
            }
          }
        },
        "notes": {
          "type": "string",
          "description": "Notes describing the task. Optional."
        },
        "parent": {
          "type": "string",
          "description": "Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the \"move\" method to move the task under a different parent or to the top level."
        },
        "position": {
          "type": "string",
          "description": "String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the \"move\" method to move the task to another position."
        },
        "selfLink": {
          "type": "string",
          "description": "URL pointing to this task. Used to retrieve, update, or delete this task."
        },
        "status": {
          "type": "string",
          "description": "Status of the task. This is either \"needsAction\" or \"completed\"."
        },
        "title": {
          "type": "string",
          "description": "Title of the task."
        },
        "updated": {
          "type": "string",
          "description": "Last modification time of the task (as a RFC 3339 timestamp).",
          "format": "date-time"
        }
      }
    },
    "TaskList": {
      "id": "TaskList",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "ETag of the resource."
        },
        "id": {
          "type": "string",
          "description": "Task list identifier."
        },
        "kind": {
          "type": "string",
          "description": "Type of the resource. This is always \"tasks#taskList\".",
          "default": "tasks#taskList"
        },
        "selfLink": {
          "type": "string",
          "description": "URL pointing to this task list. Used to retrieve, update, or delete this task list."
        },
        "title": {
          "type": "string",
          "description": "Title of the task list."
        },
        "updated": {
          "type": "string",
          "description": "Last modification time of the task list (as a RFC 3339 timestamp).",
          "format": "date-time"
        }
      }
    },
    "TaskLists": {
      "id": "TaskLists",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "ETag of the resource."
        },
        "items": {
          "type": "array",
          "description": "Collection of task lists.",
          "items": {
            "$ref": "TaskList"
          }
        },
        "kind": {
          "type": "string",
          "description": "Type of the resource. This is always \"tasks#taskLists\".",
          "default": "tasks#taskLists"
        },
        "nextPageToken": {
          "type": "string",
          "description": "Token that can be used to request the next page of this result."
        }
      }
    },
    "Tasks": {
      "id": "Tasks",
      "type": "object",
      "properties": {
        "etag": {
          "type": "string",
          "description": "ETag of the resource."
        },
        "items": {
          "type": "array",
          "description": "Collection of tasks.",
          "items": {
            "$ref": "Task"
          }
        },
        "kind": {
          "type": "string",
          "description": "Type of the resource. This is always \"tasks#tasks\".",
          "default": "tasks#tasks"
        },
        "nextPageToken": {
          "type": "string",
          "description": "Token used to access the next page of this result."
        }
      }
    }
  },
  "resources": {
    "tasklists": {
      "methods": {
        "delete": {
          "id": "tasks.tasklists.delete",
          "path": "users/@me/lists/{tasklist}",
          "httpMethod": "DELETE",
          "description": "Deletes the authenticated user's specified task list.",
          "parameters": {
            "tasklist": {
              "type": "string",
              "description": "Task list identifier.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "tasklist"
          ],
          "scopes": [
            "https://www.googleapis.com/auth/tasks"
          ]
        },
        "get": {
          "id": "tasks.tasklists.get",
          "path": "users/@me/lists/{tasklist}",
          "httpMethod": "GET",
          "description": "Returns the authenticated user's specified task list.",
          "parameters": {
            "tasklist": {
              "type": "string",
              "description": "Task list identifier.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "tasklist"
          ],
          "response": {
            "$ref": "TaskList"
          },
          "scopes": [
            "https://www.googleapis.com/auth/tasks",
            "https://www.googleapis.com/auth/tasks.readonly"
          ]
        },
        "insert": {
          "id": "tasks.tasklists.insert",
          "path": "users/@me/lists",
          "httpMethod": "POST",
          "description": "Creates a new task list and adds it to the authenticated user's task lists.",
          "request": {
            "$ref": "TaskList"
          },
          "response": {
            "$ref": "TaskList"
          },
          "scopes": [
            "https://www.googleapis.com/auth/tasks"
          ]
        },
        "list": {
          "id": "tasks.tasklists.list",
          "path": "users/@me/lists",
          "httpMethod": "GET",
          "description": "Returns all the authenticated user's task lists.",
          "parameters": {
            "maxResults": {
              "type": "string",
              "description": "Maximum number of task lists returned on one page. Optional. The default is 100.",
              "format": "int64",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "Token specifying the result page to return. Optional.",
              "location": "query"
            }
          },
          "response": {
            "$ref": "TaskLists"
          },
          "scopes": [
            "https://www.googleapis.com/auth/tasks",
            "https://www.googleapis.com/auth/tasks.readonly"
          ]
        },
        "patch": {
          "id": "tasks.tasklists.patch",
          "path": "users/@me/lists/{tasklist}",
          "httpMethod": "PATCH",
          "description": "Updates the authenticated user's specified task list. This method supports patch semantics.",
          "parameters": {
            "tasklist": {
              "type": "string",
              "description": "Task list identifier.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "tasklist"
          ],
          "request": {
            "$ref": "TaskList"
          },
          "response": {
            "$ref": "TaskList"
          },
          "scopes": [
            "https://www.googleapis.com/auth/tasks"
          ]
        },
        "update": {
          "id": "tasks.tasklists.update",
          "path": "users/@me/lists/{tasklist}",
          "httpMethod": "PUT",
          "description": "Updates the authenticated user's specified task list.",
          "parameters": {
            "tasklist": {
              "type": "string",
              "description": "Task list identifier.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "tasklist"
          ],
          "request": {
            "$ref": "TaskList"
          },
          "response": {
            "$ref": "TaskList"
          },
          "scopes": [
            "https://www.googleapis.com/auth/tasks"
          ]
        }
      }
    },
    "tasks": {
      "methods": {
        "clear": {
          "id": "tasks.tasks.clear",
          "path": "lists/{tasklist}/clear",
          "httpMethod": "POST",
          "description": "Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.",
          "parameters": {
            "tasklist": {
              "type": "string",
              "description": "Task list identifier.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "tasklist"
          ],
          "scopes": [
            "https://www.googleapis.com/auth/tasks"
          ]
        },
        "delete": {
          "id": "tasks.tasks.delete",
          "path": "lists/{tasklist}/tasks/{task}",
          "httpMethod": "DELETE",
          "description": "Deletes the specified task from the task list.",
          "parameters": {
            "task": {
              "type": "string",
              "description": "Task identifier.",
              "required": true,
              "location": "path"
            },
            "tasklist": {
              "type": "string",
              "description": "Task list identifier.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "tasklist",
            "task"
          ],
          "scopes": [
            "https://www.googleapis.com/auth/tasks"
          ]
        },
        "get": {
          "id": "tasks.tasks.get",
          "path": "lists/{tasklist}/tasks/{task}",
          "httpMethod": "GET",
          "description": "Returns the specified task.",
          "parameters": {
            "task": {
              "type": "string",
              "description": "Task identifier.",
              "required": true,
              "location": "path"
            },
            "tasklist": {
              "type": "string",
              "description": "Task list identifier.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "tasklist",
            "task"
          ],
          "response": {
            "$ref": "Task"
          },
          "scopes": [
            "https://www.googleapis.com/auth/tasks",
            "https://www.googleapis.com/auth/tasks.readonly"
          ]
        },
        "insert": {
          "id": "tasks.tasks.insert",
          "path": "lists/{tasklist}/tasks",
          "httpMethod": "POST",
          "description": "Creates a new task on the specified task list.",
          "parameters": {
            "parent": {
              "type": "string",
              "description": "Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.",
              "location": "query"
            },
            "previous": {
              "type": "string",
              "description": "Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.",
              "location": "query"
            },
            "tasklist": {
              "type": "string",
              "description": "Task list identifier.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "tasklist"
          ],
          "request": {
            "$ref": "Task"
          },
          "response": {
            "$ref": "Task"
          },
          "scopes": [
            "https://www.googleapis.com/auth/tasks"
          ]
        },
        "list": {
          "id": "tasks.tasks.list",
          "path": "lists/{tasklist}/tasks",
          "httpMethod": "GET",
          "description": "Returns all tasks in the specified task list.",
          "parameters": {
            "completedMax": {
              "type": "string",
              "description": "Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.",
              "location": "query"
            },
            "completedMin": {
              "type": "string",
              "description": "Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.",
              "location": "query"
            },
            "dueMax": {
              "type": "string",
              "description": "Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.",
              "location": "query"
            },
            "dueMin": {
              "type": "string",
              "description": "Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.",
              "location": "query"
            },
            "maxResults": {
              "type": "string",
              "description": "Maximum number of task lists returned on one page. Optional. The default is 100.",
              "format": "int64",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "Token specifying the result page to return. Optional.",
              "location": "query"
            },
            "showCompleted": {
              "type": "boolean",
              "description": "Flag indicating whether completed tasks are returned in the result. Optional. The default is True.",
              "location": "query"
            },
            "showDeleted": {
              "type": "boolean",
              "description": "Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.",
              "location": "query"
            },
            "showHidden": {
              "type": "boolean",
              "description": "Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.",
              "location": "query"
            },
            "tasklist": {
              "type": "string",
              "description": "Task list identifier.",
              "required": true,
              "location": "path"
            },
            "updatedMin": {
              "type": "string",
              "description": "Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "tasklist"
          ],
          "response": {
            "$ref": "Tasks"
          },
          "scopes": [
            "https://www.googleapis.com/auth/tasks",
            "https://www.googleapis.com/auth/tasks.readonly"
          ]
        },
        "move": {
          "id": "tasks.tasks.move",
          "path": "lists/{tasklist}/tasks/{task}/move",
          "httpMethod": "POST",
          "description": "Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.",
          "parameters": {
            "parent": {
              "type": "string",
              "description": "New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.",
              "location": "query"
            },
            "previous": {
              "type": "string",
              "description": "New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.",
              "location": "query"
            },
            "task": {
              "type": "string",
              "description": "Task identifier.",
              "required": true,
              "location": "path"
            },
            "tasklist": {
              "type": "string",
              "description": "Task list identifier.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "tasklist",
            "task"
          ],
          "response": {
            "$ref": "Task"
          },
          "scopes": [
            "https://www.googleapis.com/auth/tasks"
          ]
        },
        "patch": {
          "id": "tasks.tasks.patch",
          "path": "lists/{tasklist}/tasks/{task}",
          "httpMethod": "PATCH",
          "description": "Updates the specified task. This method supports patch semantics.",
          "parameters": {
            "task": {
              "type": "string",
              "description": "Task identifier.",
              "required": true,
              "location": "path"
            },
            "tasklist": {
              "type": "string",
              "description": "Task list identifier.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "tasklist",
            "task"
          ],
          "request": {
            "$ref": "Task"
          },
          "response": {
            "$ref": "Task"
          },
          "scopes": [
            "https://www.googleapis.com/auth/tasks"
          ]
        },
        "update": {
          "id": "tasks.tasks.update",
          "path": "lists/{tasklist}/tasks/{task}",
          "httpMethod": "PUT",
          "description": "Updates the specified task.",
          "parameters": {
            "task": {
              "type": "string",
              "description": "Task identifier.",
              "required": true,
              "location": "path"
            },
            "tasklist": {
              "type": "string",
              "description": "Task list identifier.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "tasklist",
            "task"
          ],
          "request": {
            "$ref": "Task"
          },
          "response": {
            "$ref": "Task"
          },
          "scopes": [
            "https://www.googleapis.com/auth/tasks"
          ]
        }
      }
    }
  }
};


api_format.storage =  {
  "kind": "discovery#restDescription",
  "etag": "\"zZ6SZIrxjkCWan0Pp0n2ulHSaJk/iHuNozJryNqfV3cZDsdk81TXjX4\"",
  "discoveryVersion": "v1",
  "id": "storage:v1beta1",
  "name": "storage",
  "version": "v1beta1",
  "revision": "20130103",
  "title": "Cloud Storage API",
  "description": "Lets you store and retrieve potentially-large, immutable data objects.",
  "icons": {
    "x16": "https://www.google.com/images/icons/product/cloud_storage-16.png",
    "x32": "https://www.google.com/images/icons/product/cloud_storage-32.png"
  },
  "documentationLink": "https://developers.google.com/storage/docs/json_api/",
  "labels": [
    "limited_availability"
  ],
  "protocol": "rest",
  "baseUrl": "https://www.googleapis.com/storage/v1beta1/",
  "basePath": "/storage/v1beta1/",
  "rootUrl": "https://www.googleapis.com/",
  "servicePath": "storage/v1beta1/",
  "batchPath": "batch",
  "parameters": {
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "default": "json",
      "enum": [
        "json"
      ],
      "enumDescriptions": [
        "Responses with Content-Type of application/json"
      ],
      "location": "query"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response.",
      "location": "query"
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.",
      "location": "query"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user.",
      "location": "query"
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks.",
      "default": "true",
      "location": "query"
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.",
      "location": "query"
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits.",
      "location": "query"
    }
  },
  "auth": {
    "oauth2": {
      "scopes": {
        "https://www.googleapis.com/auth/devstorage.full_control": {
          "description": "Manage your data and permissions in Google Cloud Storage"
        },
        "https://www.googleapis.com/auth/devstorage.read_only": {
          "description": "View your data in Google Cloud Storage"
        },
        "https://www.googleapis.com/auth/devstorage.read_write": {
          "description": "Manage your data in Google Cloud Storage"
        }
      }
    }
  },
  "schemas": {
    "Bucket": {
      "id": "Bucket",
      "type": "object",
      "description": "A bucket.",
      "properties": {
        "acl": {
          "type": "array",
          "description": "Access controls on the bucket.",
          "items": {
            "$ref": "BucketAccessControl"
          },
          "annotations": {
            "required": [
              "storage.buckets.update"
            ]
          }
        },
        "defaultObjectAcl": {
          "type": "array",
          "description": "Default access controls to apply to new objects when no ACL is provided.",
          "items": {
            "$ref": "ObjectAccessControl"
          }
        },
        "id": {
          "type": "string",
          "description": "The name of the bucket.",
          "annotations": {
            "required": [
              "storage.buckets.insert"
            ]
          }
        },
        "kind": {
          "type": "string",
          "description": "The kind of item this is. For buckets, this is always storage#bucket.",
          "default": "storage#bucket"
        },
        "location": {
          "type": "string",
          "description": "The location of the bucket. Object data for objects in the bucket resides in physical storage in this location. Can be US or EU. Defaults to US."
        },
        "owner": {
          "type": "object",
          "description": "The owner of the bucket. This will always be the project team's owner group.",
          "properties": {
            "entity": {
              "type": "string",
              "description": "The entity, in the form group-groupId."
            },
            "entityId": {
              "type": "string",
              "description": "The ID for the entity."
            }
          }
        },
        "projectId": {
          "type": "string",
          "description": "The project the bucket belongs to.",
          "format": "uint64",
          "annotations": {
            "required": [
              "storage.buckets.insert"
            ]
          }
        },
        "selfLink": {
          "type": "string",
          "description": "The URI of this bucket."
        },
        "timeCreated": {
          "type": "string",
          "description": "Creation time of the bucket in RFC 3339 format.",
          "format": "date-time"
        },
        "website": {
          "type": "object",
          "description": "The bucket's website configuration.",
          "properties": {
            "mainPageSuffix": {
              "type": "string",
              "description": "Behaves as the bucket's directory index where missing objects are treated as potential directories."
            },
            "notFoundPage": {
              "type": "string",
              "description": "The custom object to return when a requested resource is not found."
            }
          }
        }
      }
    },
    "BucketAccessControl": {
      "id": "BucketAccessControl",
      "type": "object",
      "description": "An access-control entry.",
      "properties": {
        "bucket": {
          "type": "string",
          "description": "The name of the bucket."
        },
        "domain": {
          "type": "string",
          "description": "The domain associated with the entity, if any."
        },
        "email": {
          "type": "string",
          "description": "The email address associated with the entity, if any."
        },
        "entity": {
          "type": "string",
          "description": "The entity holding the permission, in one of the following forms: \n- user-userId \n- user-email \n- group-groupId \n- group-email \n- allUsers \n- allAuthenticatedUsers",
          "annotations": {
            "required": [
              "storage.bucketAccessControls.insert"
            ]
          }
        },
        "entityId": {
          "type": "string",
          "description": "The ID for the entity, if any."
        },
        "id": {
          "type": "string",
          "description": "The ID of the access-control entry."
        },
        "kind": {
          "type": "string",
          "description": "The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.",
          "default": "storage#bucketAccessControl"
        },
        "role": {
          "type": "string",
          "description": "The access permission for the entity. Can be READER, WRITER, or OWNER.",
          "annotations": {
            "required": [
              "storage.bucketAccessControls.insert"
            ]
          }
        },
        "selfLink": {
          "type": "string",
          "description": "The link to this access-control entry."
        }
      }
    },
    "BucketAccessControls": {
      "id": "BucketAccessControls",
      "type": "object",
      "description": "An access-control list.",
      "properties": {
        "items": {
          "type": "array",
          "description": "The list of items.",
          "items": {
            "$ref": "BucketAccessControl"
          }
        },
        "kind": {
          "type": "string",
          "description": "The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls.",
          "default": "storage#bucketAccessControls"
        }
      }
    },
    "Buckets": {
      "id": "Buckets",
      "type": "object",
      "description": "A list of buckets.",
      "properties": {
        "items": {
          "type": "array",
          "description": "The list of items.",
          "items": {
            "$ref": "Bucket"
          }
        },
        "kind": {
          "type": "string",
          "description": "The kind of item this is. For lists of buckets, this is always storage#buckets.",
          "default": "storage#buckets"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results."
        }
      }
    },
    "Object": {
      "id": "Object",
      "type": "object",
      "description": "An object.",
      "properties": {
        "acl": {
          "type": "array",
          "description": "Access controls on the object.",
          "items": {
            "$ref": "ObjectAccessControl"
          },
          "annotations": {
            "required": [
              "storage.objects.update"
            ]
          }
        },
        "bucket": {
          "type": "string",
          "description": "The bucket containing this object."
        },
        "cacheControl": {
          "type": "string",
          "description": "Cache-Control directive for the object data."
        },
        "contentDisposition": {
          "type": "string",
          "description": "Content-Disposition of the object data."
        },
        "contentEncoding": {
          "type": "string",
          "description": "Content-Encoding of the object data."
        },
        "contentLanguage": {
          "type": "string",
          "description": "Content-Language of the object data."
        },
        "id": {
          "type": "string",
          "description": "The ID of the object."
        },
        "kind": {
          "type": "string",
          "description": "The kind of item this is. For objects, this is always storage#object.",
          "default": "storage#object"
        },
        "media": {
          "type": "object",
          "description": "Object media data. Provided on your behalf when uploading raw media or multipart/related with an auxiliary media part.",
          "properties": {
            "algorithm": {
              "type": "string",
              "description": "Hash algorithm used. Currently only MD5 is supported. Required if a hash is provided."
            },
            "contentType": {
              "type": "string",
              "description": "Content-Type of the object data.",
              "annotations": {
                "required": [
                  "storage.objects.insert",
                  "storage.objects.update"
                ]
              }
            },
            "data": {
              "type": "string",
              "description": "URL-safe Base64-encoded data. This property can be used to insert objects under 64KB in size, and will only be returned in response to the get method for objects so created. When this resource is returned in response to the list method, this property is omitted.",
              "format": "byte",
              "annotations": {
                "required": [
                  "storage.objects.insert"
                ]
              }
            },
            "hash": {
              "type": "string",
              "description": "Hash of the data. Required if a hash algorithm is provided."
            },
            "length": {
              "type": "string",
              "description": "Content-Length of the data in bytes.",
              "format": "int64"
            },
            "link": {
              "type": "string",
              "description": "Media download link."
            },
            "timeCreated": {
              "type": "string",
              "description": "Creation time of the data in RFC 3339 format.",
              "format": "date-time"
            }
          }
        },
        "metadata": {
          "type": "object",
          "description": "User-provided metadata, in key/value pairs.",
          "additionalProperties": {
            "type": "string",
            "description": "An individual metadata entry."
          }
        },
        "name": {
          "type": "string",
          "description": "The name of this object. Required if not specified by URL parameter."
        },
        "owner": {
          "type": "object",
          "description": "The owner of the object. This will always be the uploader of the object.",
          "properties": {
            "entity": {
              "type": "string",
              "description": "The entity, in the form user-userId."
            },
            "entityId": {
              "type": "string",
              "description": "The ID for the entity."
            }
          }
        },
        "selfLink": {
          "type": "string",
          "description": "The link to this object."
        }
      }
    },
    "ObjectAccessControl": {
      "id": "ObjectAccessControl",
      "type": "object",
      "description": "An access-control entry.",
      "properties": {
        "bucket": {
          "type": "string",
          "description": "The name of the bucket."
        },
        "domain": {
          "type": "string",
          "description": "The domain associated with the entity, if any."
        },
        "email": {
          "type": "string",
          "description": "The email address associated with the entity, if any."
        },
        "entity": {
          "type": "string",
          "description": "The entity holding the permission, in one of the following forms: \n- user-userId \n- user-email \n- group-groupId \n- group-email \n- allUsers \n- allAuthenticatedUsers",
          "annotations": {
            "required": [
              "storage.objectAccessControls.insert"
            ]
          }
        },
        "entityId": {
          "type": "string",
          "description": "The ID for the entity, if any."
        },
        "id": {
          "type": "string",
          "description": "The ID of the access-control entry."
        },
        "kind": {
          "type": "string",
          "description": "The kind of item this is. For object access control entries, this is always storage#objectAccessControl.",
          "default": "storage#objectAccessControl"
        },
        "object": {
          "type": "string",
          "description": "The name of the object."
        },
        "role": {
          "type": "string",
          "description": "The access permission for the entity. Can be READER or OWNER.",
          "annotations": {
            "required": [
              "storage.objectAccessControls.insert"
            ]
          }
        },
        "selfLink": {
          "type": "string",
          "description": "The link to this access-control entry."
        }
      }
    },
    "ObjectAccessControls": {
      "id": "ObjectAccessControls",
      "type": "object",
      "description": "An access-control list.",
      "properties": {
        "items": {
          "type": "array",
          "description": "The list of items.",
          "items": {
            "$ref": "ObjectAccessControl"
          }
        },
        "kind": {
          "type": "string",
          "description": "The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls.",
          "default": "storage#objectAccessControls"
        }
      }
    },
    "Objects": {
      "id": "Objects",
      "type": "object",
      "description": "A list of objects.",
      "properties": {
        "items": {
          "type": "array",
          "description": "The list of items.",
          "items": {
            "$ref": "Object"
          }
        },
        "kind": {
          "type": "string",
          "description": "The kind of item this is. For lists of objects, this is always storage#objects.",
          "default": "storage#objects"
        },
        "nextPageToken": {
          "type": "string",
          "description": "The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results."
        },
        "prefixes": {
          "type": "array",
          "description": "The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter.",
          "items": {
            "type": "string"
          }
        }
      }
    }
  },
  "resources": {
    "bucketAccessControls": {
      "methods": {
        "delete": {
          "id": "storage.bucketAccessControls.delete",
          "path": "b/{bucket}/acl/{entity}",
          "httpMethod": "DELETE",
          "description": "Deletes the ACL entry for the specified entity on the specified bucket.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "entity": {
              "type": "string",
              "description": "The entity holding the permission. Can be user-userId, group-groupId, allUsers, or allAuthenticatedUsers.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket",
            "entity"
          ],
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control"
          ]
        },
        "get": {
          "id": "storage.bucketAccessControls.get",
          "path": "b/{bucket}/acl/{entity}",
          "httpMethod": "GET",
          "description": "Returns the ACL entry for the specified entity on the specified bucket.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "entity": {
              "type": "string",
              "description": "The entity holding the permission. Can be user-userId, group-groupId, allUsers, or allAuthenticatedUsers.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket",
            "entity"
          ],
          "response": {
            "$ref": "BucketAccessControl"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control"
          ]
        },
        "insert": {
          "id": "storage.bucketAccessControls.insert",
          "path": "b/{bucket}/acl",
          "httpMethod": "POST",
          "description": "Creates a new ACL entry on the specified bucket.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket"
          ],
          "request": {
            "$ref": "BucketAccessControl"
          },
          "response": {
            "$ref": "BucketAccessControl"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control"
          ]
        },
        "list": {
          "id": "storage.bucketAccessControls.list",
          "path": "b/{bucket}/acl",
          "httpMethod": "GET",
          "description": "Retrieves ACL entries on the specified bucket.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket"
          ],
          "response": {
            "$ref": "BucketAccessControls"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control"
          ]
        },
        "patch": {
          "id": "storage.bucketAccessControls.patch",
          "path": "b/{bucket}/acl/{entity}",
          "httpMethod": "PATCH",
          "description": "Updates an ACL entry on the specified bucket. This method supports patch semantics.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "entity": {
              "type": "string",
              "description": "The entity holding the permission. Can be user-userId, group-groupId, allUsers, or allAuthenticatedUsers.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket",
            "entity"
          ],
          "request": {
            "$ref": "BucketAccessControl"
          },
          "response": {
            "$ref": "BucketAccessControl"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control"
          ]
        },
        "update": {
          "id": "storage.bucketAccessControls.update",
          "path": "b/{bucket}/acl/{entity}",
          "httpMethod": "PUT",
          "description": "Updates an ACL entry on the specified bucket.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "entity": {
              "type": "string",
              "description": "The entity holding the permission. Can be user-userId, group-groupId, allUsers, or allAuthenticatedUsers.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket",
            "entity"
          ],
          "request": {
            "$ref": "BucketAccessControl"
          },
          "response": {
            "$ref": "BucketAccessControl"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control"
          ]
        }
      }
    },
    "buckets": {
      "methods": {
        "delete": {
          "id": "storage.buckets.delete",
          "path": "b/{bucket}",
          "httpMethod": "DELETE",
          "description": "Deletes an empty bucket.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket"
          ],
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_write"
          ]
        },
        "get": {
          "id": "storage.buckets.get",
          "path": "b/{bucket}",
          "httpMethod": "GET",
          "description": "Returns metadata for the specified bucket.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "projection": {
              "type": "string",
              "description": "Set of properties to return. Defaults to no_acl.",
              "enum": [
                "full",
                "no_acl"
              ],
              "enumDescriptions": [
                "Include all properties.",
                "Omit acl and defaultObjectAcl properties."
              ],
              "location": "query"
            }
          },
          "parameterOrder": [
            "bucket"
          ],
          "response": {
            "$ref": "Bucket"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_only",
            "https://www.googleapis.com/auth/devstorage.read_write"
          ]
        },
        "insert": {
          "id": "storage.buckets.insert",
          "path": "b",
          "httpMethod": "POST",
          "description": "Creates a new bucket.",
          "parameters": {
            "projection": {
              "type": "string",
              "description": "Set of properties to return. Defaults to no_acl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.",
              "enum": [
                "full",
                "no_acl"
              ],
              "enumDescriptions": [
                "Include all properties.",
                "Omit acl and defaultObjectAcl properties."
              ],
              "location": "query"
            }
          },
          "request": {
            "$ref": "Bucket"
          },
          "response": {
            "$ref": "Bucket"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_write"
          ]
        },
        "list": {
          "id": "storage.buckets.list",
          "path": "b",
          "httpMethod": "GET",
          "description": "Retrieves a list of buckets for a given project.",
          "parameters": {
            "max-results": {
              "type": "integer",
              "description": "Maximum number of buckets to return.",
              "format": "uint32",
              "minimum": "0",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "A previously-returned page token representing part of the larger set of results to view.",
              "location": "query"
            },
            "projectId": {
              "type": "string",
              "description": "A valid API project identifier.",
              "required": true,
              "format": "uint64",
              "location": "query"
            },
            "projection": {
              "type": "string",
              "description": "Set of properties to return. Defaults to no_acl.",
              "enum": [
                "full",
                "no_acl"
              ],
              "enumDescriptions": [
                "Include all properties.",
                "Omit acl and defaultObjectAcl properties."
              ],
              "location": "query"
            }
          },
          "parameterOrder": [
            "projectId"
          ],
          "response": {
            "$ref": "Buckets"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_only",
            "https://www.googleapis.com/auth/devstorage.read_write"
          ]
        },
        "patch": {
          "id": "storage.buckets.patch",
          "path": "b/{bucket}",
          "httpMethod": "PATCH",
          "description": "Updates a bucket. This method supports patch semantics.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "projection": {
              "type": "string",
              "description": "Set of properties to return. Defaults to full.",
              "enum": [
                "full",
                "no_acl"
              ],
              "enumDescriptions": [
                "Include all properties.",
                "Omit acl and defaultObjectAcl properties."
              ],
              "location": "query"
            }
          },
          "parameterOrder": [
            "bucket"
          ],
          "request": {
            "$ref": "Bucket"
          },
          "response": {
            "$ref": "Bucket"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_write"
          ]
        },
        "update": {
          "id": "storage.buckets.update",
          "path": "b/{bucket}",
          "httpMethod": "PUT",
          "description": "Updates a bucket.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "projection": {
              "type": "string",
              "description": "Set of properties to return. Defaults to full.",
              "enum": [
                "full",
                "no_acl"
              ],
              "enumDescriptions": [
                "Include all properties.",
                "Omit acl and defaultObjectAcl properties."
              ],
              "location": "query"
            }
          },
          "parameterOrder": [
            "bucket"
          ],
          "request": {
            "$ref": "Bucket"
          },
          "response": {
            "$ref": "Bucket"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_write"
          ]
        }
      }
    },
    "objectAccessControls": {
      "methods": {
        "delete": {
          "id": "storage.objectAccessControls.delete",
          "path": "b/{bucket}/o/{object}/acl/{entity}",
          "httpMethod": "DELETE",
          "description": "Deletes the ACL entry for the specified entity on the specified object.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "entity": {
              "type": "string",
              "description": "The entity holding the permission. Can be user-userId, group-groupId, allUsers, or allAuthenticatedUsers.",
              "required": true,
              "location": "path"
            },
            "object": {
              "type": "string",
              "description": "Name of the object.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket",
            "object",
            "entity"
          ],
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control"
          ]
        },
        "get": {
          "id": "storage.objectAccessControls.get",
          "path": "b/{bucket}/o/{object}/acl/{entity}",
          "httpMethod": "GET",
          "description": "Returns the ACL entry for the specified entity on the specified object.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "entity": {
              "type": "string",
              "description": "The entity holding the permission. Can be user-userId, group-groupId, allUsers, or allAuthenticatedUsers.",
              "required": true,
              "location": "path"
            },
            "object": {
              "type": "string",
              "description": "Name of the object.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket",
            "object",
            "entity"
          ],
          "response": {
            "$ref": "ObjectAccessControl"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control"
          ]
        },
        "insert": {
          "id": "storage.objectAccessControls.insert",
          "path": "b/{bucket}/o/{object}/acl",
          "httpMethod": "POST",
          "description": "Creates a new ACL entry on the specified object.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "object": {
              "type": "string",
              "description": "Name of the object.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket",
            "object"
          ],
          "request": {
            "$ref": "ObjectAccessControl"
          },
          "response": {
            "$ref": "ObjectAccessControl"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control"
          ]
        },
        "list": {
          "id": "storage.objectAccessControls.list",
          "path": "b/{bucket}/o/{object}/acl",
          "httpMethod": "GET",
          "description": "Retrieves ACL entries on the specified object.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "object": {
              "type": "string",
              "description": "Name of the object.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket",
            "object"
          ],
          "response": {
            "$ref": "ObjectAccessControls"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control"
          ]
        },
        "patch": {
          "id": "storage.objectAccessControls.patch",
          "path": "b/{bucket}/o/{object}/acl/{entity}",
          "httpMethod": "PATCH",
          "description": "Updates an ACL entry on the specified object. This method supports patch semantics.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "entity": {
              "type": "string",
              "description": "The entity holding the permission. Can be user-userId, group-groupId, allUsers, or allAuthenticatedUsers.",
              "required": true,
              "location": "path"
            },
            "object": {
              "type": "string",
              "description": "Name of the object.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket",
            "object",
            "entity"
          ],
          "request": {
            "$ref": "ObjectAccessControl"
          },
          "response": {
            "$ref": "ObjectAccessControl"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control"
          ]
        },
        "update": {
          "id": "storage.objectAccessControls.update",
          "path": "b/{bucket}/o/{object}/acl/{entity}",
          "httpMethod": "PUT",
          "description": "Updates an ACL entry on the specified object.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of a bucket.",
              "required": true,
              "location": "path"
            },
            "entity": {
              "type": "string",
              "description": "The entity holding the permission. Can be user-userId, group-groupId, allUsers, or allAuthenticatedUsers.",
              "required": true,
              "location": "path"
            },
            "object": {
              "type": "string",
              "description": "Name of the object.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket",
            "object",
            "entity"
          ],
          "request": {
            "$ref": "ObjectAccessControl"
          },
          "response": {
            "$ref": "ObjectAccessControl"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control"
          ]
        }
      }
    },
    "objects": {
      "methods": {
        "delete": {
          "id": "storage.objects.delete",
          "path": "b/{bucket}/o/{object}",
          "httpMethod": "DELETE",
          "description": "Deletes data blobs and associated metadata.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of the bucket in which the object resides.",
              "required": true,
              "location": "path"
            },
            "object": {
              "type": "string",
              "description": "Name of the object.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "bucket",
            "object"
          ],
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_write"
          ]
        },
        "get": {
          "id": "storage.objects.get",
          "path": "b/{bucket}/o/{object}",
          "httpMethod": "GET",
          "description": "Retrieves objects or their associated metadata.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of the bucket in which the object resides.",
              "required": true,
              "location": "path"
            },
            "object": {
              "type": "string",
              "description": "Name of the object.",
              "required": true,
              "location": "path"
            },
            "projection": {
              "type": "string",
              "description": "Set of properties to return. Defaults to no_acl.",
              "enum": [
                "full",
                "no_acl"
              ],
              "enumDescriptions": [
                "Include all properties.",
                "Omit the acl property."
              ],
              "location": "query"
            }
          },
          "parameterOrder": [
            "bucket",
            "object"
          ],
          "response": {
            "$ref": "Object"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_only",
            "https://www.googleapis.com/auth/devstorage.read_write"
          ],
          "supportsMediaDownload": true
        },
        "insert": {
          "id": "storage.objects.insert",
          "path": "b/{bucket}/o",
          "httpMethod": "POST",
          "description": "Stores new data blobs and associated metadata.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.",
              "required": true,
              "location": "path"
            },
            "name": {
              "type": "string",
              "description": "Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.",
              "location": "query"
            },
            "projection": {
              "type": "string",
              "description": "Set of properties to return. Defaults to no_acl, unless the object resource specifies the acl property, when it defaults to full.",
              "enum": [
                "full",
                "no_acl"
              ],
              "enumDescriptions": [
                "Include all properties.",
                "Omit the acl property."
              ],
              "location": "query"
            }
          },
          "parameterOrder": [
            "bucket"
          ],
          "request": {
            "$ref": "Object"
          },
          "response": {
            "$ref": "Object"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_write"
          ],
          "supportsMediaDownload": true,
          "supportsMediaUpload": true,
          "mediaUpload": {
            "accept": [
              "*/*"
            ],
            "protocols": {
              "simple": {
                "multipart": true,
                "path": "/upload/storage/v1beta1/b/{bucket}/o"
              },
              "resumable": {
                "multipart": true,
                "path": "/resumable/upload/storage/v1beta1/b/{bucket}/o"
              }
            }
          }
        },
        "list": {
          "id": "storage.objects.list",
          "path": "b/{bucket}/o",
          "httpMethod": "GET",
          "description": "Retrieves a list of objects matching the criteria.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of the bucket in which to look for objects.",
              "required": true,
              "location": "path"
            },
            "delimiter": {
              "type": "string",
              "description": "Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.",
              "location": "query"
            },
            "max-results": {
              "type": "integer",
              "description": "Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.",
              "format": "uint32",
              "minimum": "0",
              "location": "query"
            },
            "pageToken": {
              "type": "string",
              "description": "A previously-returned page token representing part of the larger set of results to view.",
              "location": "query"
            },
            "prefix": {
              "type": "string",
              "description": "Filter results to objects whose names begin with this prefix.",
              "location": "query"
            },
            "projection": {
              "type": "string",
              "description": "Set of properties to return. Defaults to no_acl.",
              "enum": [
                "full",
                "no_acl"
              ],
              "enumDescriptions": [
                "Include all properties.",
                "Omit the acl property."
              ],
              "location": "query"
            }
          },
          "parameterOrder": [
            "bucket"
          ],
          "response": {
            "$ref": "Objects"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_only",
            "https://www.googleapis.com/auth/devstorage.read_write"
          ],
          "supportsSubscription": true
        },
        "patch": {
          "id": "storage.objects.patch",
          "path": "b/{bucket}/o/{object}",
          "httpMethod": "PATCH",
          "description": "Updates a data blob's associated metadata. This method supports patch semantics.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of the bucket in which the object resides.",
              "required": true,
              "location": "path"
            },
            "object": {
              "type": "string",
              "description": "Name of the object.",
              "required": true,
              "location": "path"
            },
            "projection": {
              "type": "string",
              "description": "Set of properties to return. Defaults to full.",
              "enum": [
                "full",
                "no_acl"
              ],
              "enumDescriptions": [
                "Include all properties.",
                "Omit the acl property."
              ],
              "location": "query"
            }
          },
          "parameterOrder": [
            "bucket",
            "object"
          ],
          "request": {
            "$ref": "Object"
          },
          "response": {
            "$ref": "Object"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_write"
          ]
        },
        "update": {
          "id": "storage.objects.update",
          "path": "b/{bucket}/o/{object}",
          "httpMethod": "PUT",
          "description": "Updates a data blob's associated metadata.",
          "parameters": {
            "bucket": {
              "type": "string",
              "description": "Name of the bucket in which the object resides.",
              "required": true,
              "location": "path"
            },
            "object": {
              "type": "string",
              "description": "Name of the object.",
              "required": true,
              "location": "path"
            },
            "projection": {
              "type": "string",
              "description": "Set of properties to return. Defaults to full.",
              "enum": [
                "full",
                "no_acl"
              ],
              "enumDescriptions": [
                "Include all properties.",
                "Omit the acl property."
              ],
              "location": "query"
            }
          },
          "parameterOrder": [
            "bucket",
            "object"
          ],
          "request": {
            "$ref": "Object"
          },
          "response": {
            "$ref": "Object"
          },
          "scopes": [
            "https://www.googleapis.com/auth/devstorage.full_control",
            "https://www.googleapis.com/auth/devstorage.read_write"
          ],
          "supportsMediaDownload": true
        }
      }
    }
  }
};
const wineryTest = [{id: 1, name: "winery1", appellation: "Napa", img: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_320,q_75,w_480/https://assets.simpleviewinc.com/simpleview/image/upload/crm/napavalley/Mailer_B858756A-8A91-45C3-AD5C7FDFA5796B7F_99efcb35-69bd-4202-97ccd256db2005f3.jpg",
                              comments:[{id:1, userId:1, text: "xyz"}, {id:2, userId:3, text: "abc"}], 
                              visits:[{id:1, userId:1, rating: 3}, {id:2, userId:3, rating: 5}]
                            },
                      {id: 2, name: "winery2", appellation: "Sonoma", img: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_320,q_75,w_480/https://assets.simpleviewinc.com/simpleview/image/upload/crm/napavalley/baldacci-244_B4CAB5ED-02A6-40C5-8A2B659853FEAC5D_41b0ca5a-53c0-48ca-829f99b387c3a2da.jpg",
                              comments:[{id:3, userId:2, text: "def"}],
                              visits:[{id:3, userId:2, rating: 1}]
                            }, 
                      {id: 3, name: "winery3", appellation: "Lodi", img: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_320,q_75,w_480/https://assets.simpleviewinc.com/simpleview/image/upload/crm/napavalley/13_6EAFCF0E-DCCA-4E34-95F84415A21C587F_e24d65f6-05f2-487d-b39fe5691bcc274c.jpg",
                              comments:[{id:4, userId:2, text: "ghi"}, {id:5, userId:1, text: "jkl"}, {id:6, userId:3, text: "mno"}],
                              visits:[{id:4, userId:2, rating: 4},{id:5, userId:1, rating: 5},{id:6, userId:3, rating: 4}]
                            }
                          ]

const userTest = [{id:1, username:'Allison', passwordDigest:'allison', 
                  visits:[{id:1, userId:1, rating: 3, wineryId:1}, {id:5, userId:1, rating: 5, wineryId: 3}], 
                  comments:[{id:1, userId:1, text: "xyz", wineryId:1},{id:5, userId:1, text: "jkl", wineryId: 3}], },
                  {id:2, username:'Kelly', passwordDigest:'kelly', 
                  visits:[{id:2, userId:3, rating: 5, wineryId: 2},{id:3, userId:2, rating: 1, wineryId: 3}], 
                  comments:[{id:3, userId:2, text: "def", wineryId: 2},{id:4, userId:2, text: "ghi", wineryId: 3}]},
                  {id:3, username:'Bohannon', passwordDigest:'bohannon', 
                  visits:[{id:2, userId:3, rating: 5, wineryId:1},{id:6, userId:3, rating: 4, wineryId: 3}], 
                  comments:[{id:2, userId:3, rating: 5, wineryId:1}, {id:6, userId:3, text: "mno", wineryId: 3}]}
                ]

export {wineryTest, userTest}
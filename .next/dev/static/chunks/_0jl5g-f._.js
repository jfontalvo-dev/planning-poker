(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cardSetPresets",
    ()=>cardSetPresets,
    "generateId",
    ()=>generateId,
    "generateRoomId",
    ()=>generateRoomId,
    "localStorage",
    ()=>localStorage
]);
const STORAGE_KEY = 'planning-poker-user';
const ROOM_KEY = 'planning-poker-room';
const generateId = ()=>{
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
const generateRoomId = ()=>{
    return Math.random().toString(36).substring(2, 8).toUpperCase();
};
const localStorage = {
    getUser: ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const data = window.localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        } catch  {
            return null;
        }
    },
    setUser: (data)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    },
    clearUser: ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            window.localStorage.removeItem(STORAGE_KEY);
        } catch (e) {
            console.error('Error clearing localStorage:', e);
        }
    },
    getRoomId: ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            return window.localStorage.getItem(ROOM_KEY);
        } catch  {
            return null;
        }
    },
    setRoomId: (roomId)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            window.localStorage.setItem(ROOM_KEY, roomId);
        } catch (e) {
            console.error('Error saving roomId to localStorage:', e);
        }
    },
    clearRoomId: ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            window.localStorage.removeItem(ROOM_KEY);
        } catch (e) {
            console.error('Error clearing roomId from localStorage:', e);
        }
    }
};
const cardSetPresets = {
    fibonacci: {
        type: 'fibonacci',
        values: [
            0,
            1,
            2,
            3,
            5,
            8,
            13,
            21
        ]
    },
    short: {
        type: 'short',
        values: [
            1,
            2,
            3,
            5,
            8
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useLocalStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocalStorage",
    ()=>useLocalStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/index.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const subscribers = new Set();
const notify = (data)=>{
    subscribers.forEach((cb)=>cb(data));
};
const useLocalStorage = ()=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [roomId, setRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocalStorage.useEffect": ()=>{
            const userData = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorage"].getUser();
            const savedRoomId = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorage"].getRoomId();
            setUser(userData);
            setRoomId(savedRoomId);
            setIsLoading(false);
            subscribers.add(setUser);
            return ({
                "useLocalStorage.useEffect": ()=>{
                    subscribers.delete(setUser);
                }
            })["useLocalStorage.useEffect"];
        }
    }["useLocalStorage.useEffect"], []);
    const saveUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[saveUser]": (userData)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorage"].setUser(userData);
            setUser(userData);
            notify(userData);
        }
    }["useLocalStorage.useCallback[saveUser]"], []);
    const clearUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[clearUser]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorage"].clearUser();
            setUser(null);
            notify(null);
        }
    }["useLocalStorage.useCallback[clearUser]"], []);
    const saveRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[saveRoom]": (id)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorage"].setRoomId(id);
            setRoomId(id);
        }
    }["useLocalStorage.useCallback[saveRoom]"], []);
    const clearRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[clearRoom]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorage"].clearRoomId();
            setRoomId(null);
        }
    }["useLocalStorage.useCallback[clearRoom]"], []);
    const setObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[setObserver]": (isObserver)=>{
            setUser({
                "useLocalStorage.useCallback[setObserver]": (prev)=>{
                    if (!prev) return prev;
                    const updated = {
                        ...prev,
                        isObserver
                    };
                    __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorage"].setUser(updated);
                    notify(updated);
                    return updated;
                }
            }["useLocalStorage.useCallback[setObserver]"]);
        }
    }["useLocalStorage.useCallback[setObserver]"], []);
    return {
        user,
        roomId,
        isLoading,
        saveUser,
        clearUser,
        saveRoom,
        clearRoom,
        setObserver
    };
};
_s(useLocalStorage, "ZhjhmhGsGFAW1wl3uWIL1w7UfCo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useSocket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSocket",
    ()=>useSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
let globalSocket = null;
const getSocket = ()=>{
    if (!globalSocket) {
        const socketUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001';
        globalSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(socketUrl, {
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            reconnectionAttempts: Infinity,
            transports: [
                'websocket',
                'polling'
            ]
        });
    }
    return globalSocket;
};
const useSocket = ()=>{
    _s();
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSocket.useEffect": ()=>{
            const socket = getSocket();
            const handleConnect = {
                "useSocket.useEffect.handleConnect": ()=>setIsConnected(true)
            }["useSocket.useEffect.handleConnect"];
            const handleDisconnect = {
                "useSocket.useEffect.handleDisconnect": ()=>setIsConnected(false)
            }["useSocket.useEffect.handleDisconnect"];
            if (socket.connected) {
                setIsConnected(true);
            }
            socket.on('connect', handleConnect);
            socket.on('disconnect', handleDisconnect);
            return ({
                "useSocket.useEffect": ()=>{
                    socket.off('connect', handleConnect);
                    socket.off('disconnect', handleDisconnect);
                }
            })["useSocket.useEffect"];
        }
    }["useSocket.useEffect"], []);
    const on = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[on]": (event, callback)=>{
            if (!globalSocket) return;
            globalSocket.on(event, callback);
        }
    }["useSocket.useCallback[on]"], []);
    const off = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[off]": (event, callback)=>{
            if (!globalSocket) return;
            globalSocket.off(event, callback);
        }
    }["useSocket.useCallback[off]"], []);
    const emit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[emit]": (event, ...args)=>{
            if (!globalSocket || !globalSocket.connected) return;
            globalSocket.emit(event, ...args);
        }
    }["useSocket.useCallback[emit]"], []);
    return {
        socket: globalSocket,
        isConnected,
        on,
        off,
        emit
    };
};
_s(useSocket, "KcpTY/KSyGgGmTGhkkFiebiEs/o=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAlert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAlert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useLocalStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSocket.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/roomStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRoomStore",
    ()=>useRoomStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
;
const useRoomStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])((set)=>({
        // Estado inicial
        room: null,
        currentUser: null,
        isLoading: false,
        error: null,
        // Setters directos
        setRoom: (room)=>set({
                room
            }),
        setCurrentUser: (currentUser)=>set({
                currentUser
            }),
        setIsLoading: (isLoading)=>set({
                isLoading
            }),
        setError: (error)=>set({
                error
            }),
        // Acciones de sala
        addUser: (user)=>set((state)=>({
                    room: state.room ? {
                        ...state.room,
                        users: [
                            ...state.room.users,
                            user
                        ],
                        updatedAt: Date.now()
                    } : null
                })),
        removeUser: (userId)=>set((state)=>({
                    room: state.room ? {
                        ...state.room,
                        users: state.room.users.filter((u)=>u.id !== userId),
                        updatedAt: Date.now()
                    } : null
                })),
        updateUser: (user)=>set((state)=>({
                    room: state.room ? {
                        ...state.room,
                        users: state.room.users.map((u)=>u.id === user.id ? user : u),
                        updatedAt: Date.now()
                    } : null
                })),
        // Acciones de votos
        addVote: (vote)=>set((state)=>({
                    room: state.room ? {
                        ...state.room,
                        votes: [
                            ...state.room.votes.filter((v)=>v.userId !== vote.userId),
                            vote
                        ],
                        updatedAt: Date.now()
                    } : null
                })),
        revealVotes: ()=>set((state)=>({
                    room: state.room ? {
                        ...state.room,
                        revealed: true,
                        updatedAt: Date.now()
                    } : null
                })),
        resetVotes: ()=>set((state)=>({
                    room: state.room ? {
                        ...state.room,
                        votes: [],
                        revealed: false,
                        updatedAt: Date.now()
                    } : null
                })),
        // Acciones de cartas
        updateCardSet: (cardSet)=>set((state)=>({
                    room: state.room ? {
                        ...state.room,
                        cardSet,
                        updatedAt: Date.now()
                    } : null
                })),
        // Limpiar
        clearRoom: ()=>set({
                room: null,
                currentUser: null
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/hooks/useRoom.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRoom",
    ()=>useRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSocket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useLocalStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$roomStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/roomStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const useRoom = (roomId, addAlert)=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isConnected, on, off, emit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocket"])();
    const { user: storedUser, saveUser, saveRoom, clearRoom, setObserver } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])();
    const roomStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$roomStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoomStore"])();
    const [roomNotFound, setRoomNotFound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const storedUserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(storedUser);
    const saveUserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(saveUser);
    const saveRoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(saveRoom);
    const clearRoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(clearRoom);
    const setObserverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(setObserver);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoom.useEffect": ()=>{
            storedUserRef.current = storedUser;
        }
    }["useRoom.useEffect"], [
        storedUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoom.useEffect": ()=>{
            saveUserRef.current = saveUser;
        }
    }["useRoom.useEffect"], [
        saveUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoom.useEffect": ()=>{
            saveRoomRef.current = saveRoom;
        }
    }["useRoom.useEffect"], [
        saveRoom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoom.useEffect": ()=>{
            clearRoomRef.current = clearRoom;
        }
    }["useRoom.useEffect"], [
        clearRoom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoom.useEffect": ()=>{
            setObserverRef.current = setObserver;
        }
    }["useRoom.useEffect"], [
        setObserver
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoom.useEffect": ()=>{
            if (!isConnected || !storedUser || !roomId) {
                console.log("Esperando condiciones: isConnected=%s, storedUser=%s, roomId=%s", isConnected, !!storedUser, roomId);
                return;
            }
            const initialUser = storedUser;
            console.log("📍 Uniendo a sala:", roomId);
            let cleanup = null;
            const handleRoomJoined = {
                "useRoom.useEffect.handleRoomJoined": (room)=>{
                    console.log("✅ Sala recibida:", room.id);
                    roomStore.setRoom(room);
                    saveRoomRef.current(room.id);
                    const currentUser = room.users.find({
                        "useRoom.useEffect.handleRoomJoined.currentUser": (u)=>u.id === initialUser.userId
                    }["useRoom.useEffect.handleRoomJoined.currentUser"]);
                    if (currentUser) {
                        roomStore.setCurrentUser(currentUser);
                    }
                }
            }["useRoom.useEffect.handleRoomJoined"];
            const handleUserJoined = {
                "useRoom.useEffect.handleUserJoined": (data)=>{
                    console.log("👤 Usuario se unió:", data.user.name);
                    roomStore.setRoom(data.room);
                }
            }["useRoom.useEffect.handleUserJoined"];
            const handleVoteSubmitted = {
                "useRoom.useEffect.handleVoteSubmitted": (data)=>{
                    console.log("🗳️  Voto recibido");
                    roomStore.addVote(data.vote);
                }
            }["useRoom.useEffect.handleVoteSubmitted"];
            const handleVotesRevealed = {
                "useRoom.useEffect.handleVotesRevealed": (data)=>{
                    console.log("📊 Votos revelados");
                    roomStore.setRoom(data.room);
                }
            }["useRoom.useEffect.handleVotesRevealed"];
            const handleVotesReset = {
                "useRoom.useEffect.handleVotesReset": (data)=>{
                    console.log("🔄 Votos reiniciados");
                    roomStore.setRoom(data.room);
                }
            }["useRoom.useEffect.handleVotesReset"];
            const handleCardsUpdated = {
                "useRoom.useEffect.handleCardsUpdated": (data)=>{
                    console.log("🃏 Cartas actualizadas");
                    roomStore.setRoom(data.room);
                }
            }["useRoom.useEffect.handleCardsUpdated"];
            const handleObserverToggled = {
                "useRoom.useEffect.handleObserverToggled": (data)=>{
                    console.log("👁️ Observador cambiado");
                    roomStore.setRoom(data.room);
                    const user = data.room.users.find({
                        "useRoom.useEffect.handleObserverToggled.user": (u)=>u.id === initialUser.userId
                    }["useRoom.useEffect.handleObserverToggled.user"]);
                    if (user) {
                        roomStore.setCurrentUser(user);
                    }
                    if (data.userId === initialUser.userId) {
                        setObserverRef.current(data.isObserver);
                    }
                }
            }["useRoom.useEffect.handleObserverToggled"];
            const handleUserLeft = {
                "useRoom.useEffect.handleUserLeft": (data)=>{
                    console.log("👋 Usuario salió:", data.userId);
                    if (data.userId === initialUser.userId) {
                        clearRoomRef.current();
                        router.push("/");
                    } else {
                        roomStore.setRoom(data.room);
                        const user = data.room.users.find({
                            "useRoom.useEffect.handleUserLeft.user": (u)=>u.id === initialUser.userId
                        }["useRoom.useEffect.handleUserLeft.user"]);
                        if (user) {
                            roomStore.setCurrentUser(user);
                        }
                    }
                }
            }["useRoom.useEffect.handleUserLeft"];
            const handleError = {
                "useRoom.useEffect.handleError": (data)=>{
                    console.error("❌ Error:", data.message);
                    if (data.message === "Room not found") {
                        clearRoomRef.current();
                        setRoomNotFound(true);
                        return;
                    }
                    addAlert({
                        type: "error",
                        title: "Error",
                        message: data.message,
                        duration: "medium"
                    });
                }
            }["useRoom.useEffect.handleError"];
            const handleRoomClosed = {
                "useRoom.useEffect.handleRoomClosed": (data)=>{
                    console.log("🔥 Sala cerrada:", data.message);
                    clearRoomRef.current();
                    addAlert({
                        type: "warning",
                        title: "Sala cerrada",
                        message: data.message,
                        duration: "long"
                    });
                    router.push("/");
                }
            }["useRoom.useEffect.handleRoomClosed"];
            on("room-joined", handleRoomJoined);
            on("user-joined", handleUserJoined);
            on("vote-submitted", handleVoteSubmitted);
            on("votes-revealed", handleVotesRevealed);
            on("votes-reset", handleVotesReset);
            on("cards-updated", handleCardsUpdated);
            on("observer-toggled", handleObserverToggled);
            on("user-left", handleUserLeft);
            const handleNameUpdated = {
                "useRoom.useEffect.handleNameUpdated": (data)=>{
                    console.log("✏️  Nombre actualizado:", data.userId, "→", data.newName);
                    roomStore.setRoom(data.room);
                    const user = data.room.users.find({
                        "useRoom.useEffect.handleNameUpdated.user": (u)=>u.id === initialUser.userId
                    }["useRoom.useEffect.handleNameUpdated.user"]);
                    if (user) {
                        roomStore.setCurrentUser(user);
                    }
                    if (data.userId === initialUser.userId) {
                        saveUserRef.current({
                            userId: initialUser.userId,
                            userName: data.newName,
                            isObserver: storedUserRef.current?.isObserver ?? false
                        });
                    }
                }
            }["useRoom.useEffect.handleNameUpdated"];
            on("room-closed", handleRoomClosed);
            on("name-updated", handleNameUpdated);
            on("error", handleError);
            emit("join-room", {
                roomId,
                userId: initialUser.userId,
                userName: initialUser.userName,
                isObserver: initialUser.isObserver ?? false
            });
            cleanup = ({
                "useRoom.useEffect": ()=>{
                    off("room-joined", handleRoomJoined);
                    off("user-joined", handleUserJoined);
                    off("vote-submitted", handleVoteSubmitted);
                    off("votes-revealed", handleVotesRevealed);
                    off("votes-reset", handleVotesReset);
                    off("cards-updated", handleCardsUpdated);
                    off("observer-toggled", handleObserverToggled);
                    off("user-left", handleUserLeft);
                    off("room-closed", handleRoomClosed);
                    off("name-updated", handleNameUpdated);
                    off("error", handleError);
                }
            })["useRoom.useEffect"];
            return cleanup;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useRoom.useEffect"], [
        isConnected,
        !!storedUser,
        roomId,
        emit,
        on,
        off,
        router,
        addAlert
    ]);
    const handleVote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoom.useCallback[handleVote]": (value)=>{
            if (!storedUserRef.current || !roomStore.room) return;
            emit("vote", {
                roomId: roomStore.room.id,
                userId: storedUserRef.current.userId,
                value
            });
        }
    }["useRoom.useCallback[handleVote]"], [
        roomStore.room,
        emit
    ]);
    const handleRevealVotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoom.useCallback[handleRevealVotes]": ()=>{
            if (!roomStore.room) return;
            emit("reveal-votes", {
                roomId: roomStore.room.id,
                adminId: roomStore.room.adminId
            });
        }
    }["useRoom.useCallback[handleRevealVotes]"], [
        roomStore.room,
        emit
    ]);
    const handleResetVotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoom.useCallback[handleResetVotes]": ()=>{
            if (!roomStore.room) return;
            emit("reset-votes", {
                roomId: roomStore.room.id,
                adminId: roomStore.room.adminId
            });
        }
    }["useRoom.useCallback[handleResetVotes]"], [
        roomStore.room,
        emit
    ]);
    const handleUpdateCardSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoom.useCallback[handleUpdateCardSet]": (cardSet)=>{
            if (!roomStore.room) return;
            emit("update-cards", {
                roomId: roomStore.room.id,
                adminId: roomStore.room.adminId,
                cardSet
            });
        }
    }["useRoom.useCallback[handleUpdateCardSet]"], [
        roomStore.room,
        emit
    ]);
    const handleToggleObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoom.useCallback[handleToggleObserver]": ()=>{
            if (!storedUserRef.current || !roomStore.room) return;
            const newIsObserver = !roomStore.currentUser?.isObserver;
            emit("toggle-observer", {
                roomId: roomStore.room.id,
                userId: storedUserRef.current.userId,
                isObserver: newIsObserver
            });
        }
    }["useRoom.useCallback[handleToggleObserver]"], [
        roomStore.room,
        roomStore.currentUser,
        emit
    ]);
    const handleUpdateUserName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoom.useCallback[handleUpdateUserName]": (newName)=>{
            if (!storedUserRef.current || !roomStore.room || !roomStore.currentUser) return;
            emit("update-name", {
                roomId: roomStore.room.id,
                userId: storedUserRef.current.userId,
                newName
            });
        }
    }["useRoom.useCallback[handleUpdateUserName]"], [
        roomStore.room,
        roomStore.currentUser,
        emit
    ]);
    const handleLeaveRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoom.useCallback[handleLeaveRoom]": ()=>{
            if (storedUserRef.current && roomStore.room) {
                emit("leave-room", {
                    roomId: roomStore.room.id,
                    userId: storedUserRef.current.userId
                });
                clearRoomRef.current();
                router.push("/");
            }
        }
    }["useRoom.useCallback[handleLeaveRoom]"], [
        roomStore.room,
        emit,
        router
    ]);
    const handleCloseRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoom.useCallback[handleCloseRoom]": ()=>{
            if (storedUserRef.current && roomStore.room) {
                emit("close-room", {
                    roomId: roomStore.room.id,
                    adminId: storedUserRef.current.userId
                });
            }
        }
    }["useRoom.useCallback[handleCloseRoom]"], [
        roomStore.room,
        emit
    ]);
    return {
        room: roomStore.room,
        currentUser: roomStore.currentUser,
        isReady: !!roomStore.room && !!roomStore.currentUser && !!storedUserRef.current,
        roomNotFound,
        handleVote,
        handleRevealVotes,
        handleResetVotes,
        handleUpdateCardSet,
        handleToggleObserver,
        handleUpdateUserName,
        handleLeaveRoom,
        handleCloseRoom
    };
};
_s(useRoom, "e5bZlORCxwJB1PAbNFYZvAic/aI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocket"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$roomStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoomStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/hooks/useGuestAccess.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGuestAccess",
    ()=>useGuestAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSocket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useLocalStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/index.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const useGuestAccess = (roomId, addAlert)=>{
    _s();
    const { isConnected, on, off, emit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocket"])();
    const { user: storedUser, saveUser, saveRoom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])();
    const [showGuestPrompt, setShowGuestPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isJoiningAsGuest, setIsJoiningAsGuest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGuestAccess.useEffect": ()=>{
            if (isConnected && !storedUser && isMountedRef.current) {
                setShowGuestPrompt(true);
            }
        }
    }["useGuestAccess.useEffect"], [
        isConnected,
        storedUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGuestAccess.useEffect": ()=>{
            return ({
                "useGuestAccess.useEffect": ()=>{
                    isMountedRef.current = false;
                }
            })["useGuestAccess.useEffect"];
        }
    }["useGuestAccess.useEffect"], []);
    const handleGuestJoin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuestAccess.useCallback[handleGuestJoin]": async (userName)=>{
            if (!isConnected) {
                addAlert({
                    type: "error",
                    title: "Sin conexión",
                    message: "No hay conexión al servidor. Intenta nuevamente.",
                    duration: "medium"
                });
                return;
            }
            setIsJoiningAsGuest(true);
            try {
                const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])();
                saveUser({
                    userId,
                    userName,
                    isObserver: false
                });
                let handled = false;
                let timeoutId = null;
                const handleRoomJoined = {
                    "useGuestAccess.useCallback[handleGuestJoin].handleRoomJoined": (room)=>{
                        console.log("✅ Guest joined room:", room.id);
                        if (handled) return;
                        handled = true;
                        if (timeoutId) clearTimeout(timeoutId);
                        saveRoom(room.id);
                        setIsJoiningAsGuest(false);
                        setShowGuestPrompt(false);
                        off("room-joined", handleRoomJoined);
                        off("error", handleError);
                    }
                }["useGuestAccess.useCallback[handleGuestJoin].handleRoomJoined"];
                const handleError = {
                    "useGuestAccess.useCallback[handleGuestJoin].handleError": (data)=>{
                        console.error("❌ Guest join error:", data.message);
                        if (handled) return;
                        handled = true;
                        if (timeoutId) clearTimeout(timeoutId);
                        setIsJoiningAsGuest(false);
                        addAlert({
                            type: "error",
                            title: "Error al unirse",
                            message: data.message,
                            duration: "medium"
                        });
                    }
                }["useGuestAccess.useCallback[handleGuestJoin].handleError"];
                on("room-joined", handleRoomJoined);
                on("error", handleError);
                await new Promise({
                    "useGuestAccess.useCallback[handleGuestJoin]": (resolve)=>setTimeout(resolve, 100)
                }["useGuestAccess.useCallback[handleGuestJoin]"]);
                emit("join-room", {
                    roomId,
                    userId,
                    userName
                });
                timeoutId = setTimeout({
                    "useGuestAccess.useCallback[handleGuestJoin]": ()=>{
                        console.warn("⏱️ Guest join timeout");
                        if (handled) return;
                        handled = true;
                        setIsJoiningAsGuest(false);
                        off("room-joined", handleRoomJoined);
                        off("error", handleError);
                        addAlert({
                            type: "warning",
                            title: "Timeout",
                            message: "Timeout al unirse a la sala. Intenta nuevamente.",
                            duration: "medium"
                        });
                    }
                }["useGuestAccess.useCallback[handleGuestJoin]"], 5000);
            } catch (error) {
                setIsJoiningAsGuest(false);
                console.error("Error in guest join:", error);
                addAlert({
                    type: "error",
                    title: "Error",
                    message: "Error al unirse a la sala",
                    duration: "medium"
                });
            }
        }
    }["useGuestAccess.useCallback[handleGuestJoin]"], [
        isConnected,
        roomId,
        emit,
        on,
        off,
        saveUser,
        saveRoom
    ]);
    return {
        showGuestPrompt,
        isJoiningAsGuest,
        handleGuestJoin
    };
};
_s(useGuestAccess, "Zi6OExkAyjZZTfkUAgV7PaaeXa4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocket"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/hooks/useHeader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHeader",
    ()=>useHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAlert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAlert.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const useHeader = ({ roomId, onToggleObserver })=>{
    _s();
    const [isPopupOpen, setIsPopupOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const popupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { addAlert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAlert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAlert"])();
    const today = new Date().toLocaleDateString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const togglePopup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHeader.useCallback[togglePopup]": ()=>{
            setIsPopupOpen({
                "useHeader.useCallback[togglePopup]": (prev)=>!prev
            }["useHeader.useCallback[togglePopup]"]);
        }
    }["useHeader.useCallback[togglePopup]"], []);
    const closePopup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHeader.useCallback[closePopup]": ()=>{
            setIsPopupOpen(false);
        }
    }["useHeader.useCallback[closePopup]"], []);
    const handleShareRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHeader.useCallback[handleShareRoom]": async ()=>{
            const roomLink = `${window.location.origin}/room/${roomId}`;
            try {
                await navigator.clipboard.writeText(roomLink);
                addAlert({
                    type: "success",
                    title: "Enlace copiado",
                    message: "El enlace de la sala se copió al portapapeles",
                    duration: "short"
                });
            } catch  {
                console.error("Error copying to clipboard");
                addAlert({
                    type: "error",
                    title: "Error",
                    message: "No se pudo copiar el enlace",
                    duration: "medium"
                });
            }
        }
    }["useHeader.useCallback[handleShareRoom]"], [
        roomId,
        addAlert
    ]);
    const handleToggleObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHeader.useCallback[handleToggleObserver]": ()=>{
            onToggleObserver();
        }
    }["useHeader.useCallback[handleToggleObserver]"], [
        onToggleObserver
    ]);
    // Close popup on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHeader.useEffect": ()=>{
            const handleClickOutside = {
                "useHeader.useEffect.handleClickOutside": (e)=>{
                    if (popupRef.current && !popupRef.current.contains(e.target)) {
                        setIsPopupOpen(false);
                    }
                }
            }["useHeader.useEffect.handleClickOutside"];
            if (isPopupOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "useHeader.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["useHeader.useEffect"];
        }
    }["useHeader.useEffect"], [
        isPopupOpen
    ]);
    return {
        today,
        isPopupOpen,
        popupRef,
        togglePopup,
        closePopup,
        handleShareRoom,
        handleToggleObserver
    };
};
_s(useHeader, "vIWUIvd9blL+eckoetiO9NFd8Bo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAlert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAlert"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/utils/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Animation Variants ─────────────────────────────────────────────
__turbopack_context__.s([
    "CARD_SCROLL_AMOUNT",
    ()=>CARD_SCROLL_AMOUNT,
    "FIBONACCI_PRESET",
    ()=>FIBONACCI_PRESET,
    "MAX_PER_RING",
    ()=>MAX_PER_RING,
    "ROLE_CONFIG",
    ()=>ROLE_CONFIG,
    "TIMER_PRESET_SECONDS",
    ()=>TIMER_PRESET_SECONDS,
    "TIMER_STATUS_STYLES",
    ()=>TIMER_STATUS_STYLES,
    "cardSelectorContainerVariants",
    ()=>cardSelectorContainerVariants,
    "cardSelectorItemVariants",
    ()=>cardSelectorItemVariants,
    "getRingPositions",
    ()=>getRingPositions,
    "sidebarContainerVariants",
    ()=>sidebarContainerVariants,
    "sidebarItemVariants",
    ()=>sidebarItemVariants
]);
const sidebarContainerVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};
const sidebarItemVariants = {
    hidden: {
        opacity: 0,
        x: -20
    },
    show: {
        opacity: 1,
        x: 0
    }
};
const CARD_SCROLL_AMOUNT = 200;
const cardSelectorContainerVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.05
        }
    }
};
const cardSelectorItemVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    show: {
        opacity: 1,
        scale: 1
    }
};
const MAX_PER_RING = 8;
const getRingPositions = (count)=>{
    const positions = [];
    let placed = 0;
    let ringIdx = 0;
    while(placed < count){
        const remaining = count - placed;
        const ringCount = Math.min(MAX_PER_RING, remaining);
        const radiusPct = 30 + ringIdx * 14;
        for(let i = 0; i < ringCount; i++){
            const angle = i / ringCount * 2 * Math.PI - Math.PI / 2;
            positions.push({
                left: `${50 + Math.cos(angle) * radiusPct}%`,
                top: `${50 + Math.sin(angle) * radiusPct}%`
            });
        }
        placed += ringCount;
        ringIdx++;
    }
    return positions;
};
const FIBONACCI_PRESET = {
    label: 'Fibonacci',
    type: 'fibonacci',
    values: [
        0,
        1,
        2,
        3,
        5,
        8,
        13,
        21
    ]
};
const ROLE_CONFIG = {
    admin: {
        color: 'text-red-400',
        label: 'Admin'
    },
    user: {
        color: 'text-blue-400',
        label: 'Usuario'
    }
};
const TIMER_PRESET_SECONDS = [
    15,
    30,
    45,
    60,
    90
];
const TIMER_STATUS_STYLES = {
    idle: {
        bg: 'bg-neutral-800/60',
        border: 'border-neutral-700/50',
        text: 'text-neutral-400',
        icon: 'text-neutral-500',
        shadow: ''
    },
    running: {
        bg: 'bg-primary-500/10',
        border: 'border-primary-500/40',
        text: 'text-primary-300',
        icon: 'text-primary-400',
        shadow: 'shadow-lg shadow-primary-500/10'
    },
    paused: {
        bg: 'bg-neutral-800/70',
        border: 'border-neutral-600/50',
        text: 'text-neutral-300',
        icon: 'text-neutral-400',
        shadow: ''
    },
    finished: {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400',
        icon: 'text-emerald-400',
        shadow: 'shadow-lg shadow-emerald-500/10'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/hooks/useCardSetModal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCardSetModal",
    ()=>useCardSetModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/utils/index.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const parseValues = (text)=>Array.from(new Set(text.split(',').map((v)=>parseInt(v.trim(), 10)).filter((v)=>!isNaN(v)))).sort((a, b)=>a - b);
const useCardSetModal = ({ cardSet, onUpdateCardSet, onClose })=>{
    _s();
    const [customCards, setCustomCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cardSet.values.join(', '));
    const currentValues = cardSet.values.join(', ');
    const hasChanges = customCards.trim() !== currentValues && parseValues(customCards).length > 0;
    const hasDuplicates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCardSetModal.useMemo[hasDuplicates]": ()=>{
            const values = customCards.split(',').map({
                "useCardSetModal.useMemo[hasDuplicates].values": (v)=>parseInt(v.trim(), 10)
            }["useCardSetModal.useMemo[hasDuplicates].values"]).filter({
                "useCardSetModal.useMemo[hasDuplicates].values": (v)=>!isNaN(v)
            }["useCardSetModal.useMemo[hasDuplicates].values"]);
            return values.length !== new Set(values).size;
        }
    }["useCardSetModal.useMemo[hasDuplicates]"], [
        customCards
    ]);
    const handleApply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCardSetModal.useCallback[handleApply]": ()=>{
            const unique = parseValues(customCards);
            if (unique.length > 0) {
                onUpdateCardSet({
                    type: 'custom',
                    values: unique
                });
                onClose();
            }
        }
    }["useCardSetModal.useCallback[handleApply]"], [
        customCards,
        onUpdateCardSet,
        onClose
    ]);
    const handleRestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCardSetModal.useCallback[handleRestore]": ()=>{
            setCustomCards(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIBONACCI_PRESET"].values.join(', '));
        }
    }["useCardSetModal.useCallback[handleRestore]"], []);
    return {
        customCards,
        setCustomCards,
        hasChanges,
        hasDuplicates,
        handleApply,
        handleRestore
    };
};
_s(useCardSetModal, "O7PGiP+bIdgBXvRX0h2rg5JNxe8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/hooks/useCardSelector.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCardSelector",
    ()=>useCardSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/utils/index.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const useCardSelector = (cardSet)=>{
    _s();
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showArrows, setShowArrows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const checkOverflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCardSelector.useCallback[checkOverflow]": ()=>{
            const el = scrollContainerRef.current;
            if (el) {
                setShowArrows(el.scrollWidth > el.clientWidth);
            }
        }
    }["useCardSelector.useCallback[checkOverflow]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCardSelector.useEffect": ()=>{
            checkOverflow();
            window.addEventListener("resize", checkOverflow);
            return ({
                "useCardSelector.useEffect": ()=>window.removeEventListener("resize", checkOverflow)
            })["useCardSelector.useEffect"];
        }
    }["useCardSelector.useEffect"], [
        checkOverflow,
        cardSet.values
    ]);
    const scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCardSelector.useCallback[scroll]": (direction)=>{
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                    left: direction === "left" ? -__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_SCROLL_AMOUNT"] : __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_SCROLL_AMOUNT"],
                    behavior: "smooth"
                });
            }
        }
    }["useCardSelector.useCallback[scroll]"], []);
    return {
        scrollContainerRef,
        showArrows,
        scroll
    };
};
_s(useCardSelector, "mcmgcZdEP71IMA3bJAC1t0OnJXA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/hooks/useSidebar.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const useSidebar = ({ users, votes })=>{
    _s();
    const getUserVote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSidebar.useCallback[getUserVote]": (userId)=>votes.find({
                "useSidebar.useCallback[getUserVote]": (v)=>v.userId === userId
            }["useSidebar.useCallback[getUserVote]"])
    }["useSidebar.useCallback[getUserVote]"], [
        votes
    ]);
    const voterCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSidebar.useMemo[voterCount]": ()=>users.filter({
                "useSidebar.useMemo[voterCount]": (u)=>!u.isObserver
            }["useSidebar.useMemo[voterCount]"]).length
    }["useSidebar.useMemo[voterCount]"], [
        users
    ]);
    return {
        getUserVote,
        voterCount
    };
};
_s(useSidebar, "bQHOvYh89tCC7NZU7WgfLYNx2h8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/hooks/useVotingArea.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVotingArea",
    ()=>useVotingArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const useVotingArea = ({ votes })=>{
    _s();
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useVotingArea.useMemo[stats]": ()=>{
            if (votes.length === 0) return null;
            const numericalVotes = votes.map({
                "useVotingArea.useMemo[stats].numericalVotes": (v)=>v.value
            }["useVotingArea.useMemo[stats].numericalVotes"]).filter({
                "useVotingArea.useMemo[stats].numericalVotes": (v)=>typeof v === "number"
            }["useVotingArea.useMemo[stats].numericalVotes"]);
            if (numericalVotes.length === 0) return null;
            const average = numericalVotes.reduce({
                "useVotingArea.useMemo[stats]": (a, b)=>a + b
            }["useVotingArea.useMemo[stats]"], 0) / numericalVotes.length;
            const min = Math.min(...numericalVotes);
            const max = Math.max(...numericalVotes);
            return {
                average: average.toFixed(1),
                min,
                max
            };
        }
    }["useVotingArea.useMemo[stats]"], [
        votes
    ]);
    return {
        stats
    };
};
_s(useVotingArea, "3FvJDKtC3yF1gbNv5/WixcrN7Rs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/hooks/useUserPopup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserPopup",
    ()=>useUserPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const useUserPopup = ({ userName, onSaveName })=>{
    _s();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newName, setNewName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(userName);
    const handleSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserPopup.useCallback[handleSave]": ()=>{
            const trimmed = newName.trim();
            if (trimmed && trimmed !== userName) {
                onSaveName(trimmed);
            }
            setIsEditing(false);
        }
    }["useUserPopup.useCallback[handleSave]"], [
        newName,
        userName,
        onSaveName
    ]);
    const handleCancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserPopup.useCallback[handleCancel]": ()=>{
            setNewName(userName);
            setIsEditing(false);
        }
    }["useUserPopup.useCallback[handleCancel]"], [
        userName
    ]);
    const startEditing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserPopup.useCallback[startEditing]": ()=>{
            setIsEditing(true);
        }
    }["useUserPopup.useCallback[startEditing]"], []);
    return {
        isEditing,
        newName,
        setNewName,
        handleSave,
        handleCancel,
        startEditing
    };
};
_s(useUserPopup, "iud0i4u3xFy86uZSB0WcrBz5GiQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/hooks/useTimer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTimer",
    ()=>useTimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSocket.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const formatTime = (seconds)=>{
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};
const useTimer = (roomId, onFinished)=>{
    _s();
    const { on, off, emit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocket"])();
    const [timer, setTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: "idle",
        remaining: 0,
        duration: 0
    });
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onFinishedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onFinished);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimer.useEffect": ()=>{
            onFinishedRef.current = onFinished;
        }
    }["useTimer.useEffect"], [
        onFinished
    ]);
    const clearTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimer.useCallback[clearTimer]": ()=>{
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }["useTimer.useCallback[clearTimer]"], []);
    const startInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimer.useCallback[startInterval]": ()=>{
            clearTimer();
            intervalRef.current = setInterval({
                "useTimer.useCallback[startInterval]": ()=>{
                    setTimer({
                        "useTimer.useCallback[startInterval]": (prev)=>{
                            if (prev.remaining <= 1) {
                                if (intervalRef.current) {
                                    clearInterval(intervalRef.current);
                                    intervalRef.current = null;
                                }
                                onFinishedRef.current?.();
                                return {
                                    ...prev,
                                    remaining: 0,
                                    status: "finished"
                                };
                            }
                            return {
                                ...prev,
                                remaining: prev.remaining - 1
                            };
                        }
                    }["useTimer.useCallback[startInterval]"]);
                }
            }["useTimer.useCallback[startInterval]"], 1000);
        }
    }["useTimer.useCallback[startInterval]"], [
        clearTimer
    ]);
    // Socket listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimer.useEffect": ()=>{
            const handleStarted = {
                "useTimer.useEffect.handleStarted": (data)=>{
                    clearTimer();
                    setTimer({
                        status: "running",
                        remaining: data.duration,
                        duration: data.duration
                    });
                    startInterval();
                }
            }["useTimer.useEffect.handleStarted"];
            const handlePaused = {
                "useTimer.useEffect.handlePaused": ()=>{
                    clearTimer();
                    setTimer({
                        "useTimer.useEffect.handlePaused": (prev)=>({
                                ...prev,
                                status: "paused"
                            })
                    }["useTimer.useEffect.handlePaused"]);
                }
            }["useTimer.useEffect.handlePaused"];
            const handleResumed = {
                "useTimer.useEffect.handleResumed": ()=>{
                    setTimer({
                        "useTimer.useEffect.handleResumed": (prev)=>({
                                ...prev,
                                status: "running"
                            })
                    }["useTimer.useEffect.handleResumed"]);
                    startInterval();
                }
            }["useTimer.useEffect.handleResumed"];
            const handleReset = {
                "useTimer.useEffect.handleReset": ()=>{
                    clearTimer();
                    setTimer({
                        status: "idle",
                        remaining: 0,
                        duration: 0
                    });
                }
            }["useTimer.useEffect.handleReset"];
            on("timer-started", handleStarted);
            on("timer-paused", handlePaused);
            on("timer-resumed", handleResumed);
            on("timer-reset", handleReset);
            return ({
                "useTimer.useEffect": ()=>{
                    off("timer-started", handleStarted);
                    off("timer-paused", handlePaused);
                    off("timer-resumed", handleResumed);
                    off("timer-reset", handleReset);
                    clearTimer();
                }
            })["useTimer.useEffect"];
        }
    }["useTimer.useEffect"], [
        on,
        off,
        clearTimer,
        startInterval
    ]);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimer.useCallback[start]": (seconds)=>{
            emit("start-timer", {
                roomId,
                duration: seconds
            });
        }
    }["useTimer.useCallback[start]"], [
        emit,
        roomId
    ]);
    const pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimer.useCallback[pause]": ()=>{
            emit("pause-timer", {
                roomId
            });
        }
    }["useTimer.useCallback[pause]"], [
        emit,
        roomId
    ]);
    const resume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimer.useCallback[resume]": ()=>{
            emit("resume-timer", {
                roomId
            });
        }
    }["useTimer.useCallback[resume]"], [
        emit,
        roomId
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimer.useCallback[reset]": ()=>{
            emit("reset-timer", {
                roomId
            });
        }
    }["useTimer.useCallback[reset]"], [
        emit,
        roomId
    ]);
    const progress = timer.duration > 0 ? timer.remaining / timer.duration * 100 : 0;
    return {
        timer,
        formattedTime: formatTime(timer.remaining),
        progress,
        start,
        pause,
        resume,
        reset
    };
};
_s(useTimer, "RHtf1JUogcsqva4Et8EmrVXZT3M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocket"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/hooks/useTimerPopup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTimerPopup",
    ()=>useTimerPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const useTimerPopup = ({ timer })=>{
    _s();
    const [selectedSeconds, setSelectedSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isIdle = timer.status === "idle";
    const isRunning = timer.status === "running";
    const isPaused = timer.status === "paused";
    const isFinished = timer.status === "finished";
    return {
        selectedSeconds,
        setSelectedSeconds,
        isIdle,
        isRunning,
        isPaused,
        isFinished
    };
};
_s(useTimerPopup, "uG3M/CmLKIIdqtHpUhmuOQZbmcE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/hooks/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// ─── Room Core ──────────────────────────────────────────────────────
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useRoom.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useGuestAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useGuestAccess.ts [app-client] (ecmascript)");
// ─── Component Hooks ────────────────────────────────────────────────
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useHeader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useCardSetModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useCardSetModal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useCardSelector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useCardSelector.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useSidebar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useSidebar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useVotingArea$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useVotingArea.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useUserPopup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useUserPopup.ts [app-client] (ecmascript)");
// ─── Timer ──────────────────────────────────────────────────────────
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useTimer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useTimerPopup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useTimerPopup.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/components/UserPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserPopup",
    ()=>UserPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x-circle.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/views/Room/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useUserPopup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useUserPopup.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const UserPopup = ({ userName, roomId, isObserver, isAdmin, onToggleObserver, onSaveName, onOpenCardSetModal, onCloseRoom, onLogout })=>{
    _s();
    const { isEditing, newName, setNewName, handleSave, handleCancel, startEditing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useUserPopup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPopup"])({
        userName,
        onSaveName
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.9,
            y: -10
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: -10
        },
        transition: {
            duration: 0.15
        },
        className: "absolute right-0 top-12 w-64 bg-neutral-800/95 backdrop-blur-xl border border-neutral-700/50 rounded-xl shadow-2xl shadow-black/40 z-50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 border-b border-neutral-700/50",
                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: newName,
                            onChange: (e)=>setNewName(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === "Enter") handleSave();
                                if (e.key === "Escape") handleCancel();
                            },
                            autoFocus: true,
                            maxLength: 20,
                            className: "flex-1 px-2 py-1 rounded-lg bg-neutral-700/50 border border-neutral-600/50 text-sm text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30"
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/UserPopup.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            onClick: handleSave,
                            className: "p-1 rounded-md hover:bg-green-500/20 cursor-pointer text-green-400 transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/UserPopup.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/UserPopup.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            onClick: handleCancel,
                            className: "p-1 rounded-md hover:bg-red-500/20 cursor-pointer text-red-400 transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/UserPopup.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/UserPopup.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/views/Room/components/UserPopup.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-white truncate",
                                    children: userName
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/UserPopup.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-neutral-400",
                                    children: [
                                        "Sala: ",
                                        roomId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/views/Room/components/UserPopup.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/views/Room/components/UserPopup.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            onClick: ()=>startEditing(),
                            className: "p-1.5 rounded-lg hover:bg-white/5 cursor-pointer text-neutral-400 hover:text-neutral-300 transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/UserPopup.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/UserPopup.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/views/Room/components/UserPopup.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/views/Room/components/UserPopup.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 border-b border-neutral-700/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onToggleObserver,
                    className: "w-full flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    size: 14,
                                    className: "text-yellow-400"
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/UserPopup.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-neutral-300",
                                    children: "Observador"
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/UserPopup.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/views/Room/components/UserPopup.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative w-9 h-5 rounded-full cursor-pointer transition-colors ${isObserver ? "bg-primary-500" : "bg-neutral-600"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    x: isObserver ? 16 : 2
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30
                                },
                                className: "absolute top-0.5 w-4 h-4 rounded-full bg-white shadow"
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/UserPopup.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/UserPopup.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/views/Room/components/UserPopup.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/views/Room/components/UserPopup.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-2",
                children: [
                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            x: 2
                        },
                        onClick: onOpenCardSetModal,
                        className: "w-full flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer text-sm text-neutral-300 hover:bg-white/5 hover:text-white transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/UserPopup.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Configuración de cartas"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Room/components/UserPopup.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            x: 2
                        },
                        onClick: onCloseRoom,
                        className: "w-full flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/UserPopup.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Cerrar sala"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Room/components/UserPopup.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            x: 2
                        },
                        onClick: onLogout,
                        className: "w-full flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/UserPopup.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Salir de la sala"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Room/components/UserPopup.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/views/Room/components/UserPopup.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/views/Room/components/UserPopup.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserPopup, "4mo8kpUqgMrM67vp9esW90iGEEY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useUserPopup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPopup"]
    ];
});
_c = UserPopup;
var _c;
__turbopack_context__.k.register(_c, "UserPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/components/TimerDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimerDisplay",
    ()=>TimerDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/utils/index.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const TimerDisplay = ({ formattedTime, status, isPopupOpen, onClick })=>{
    const styles = __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIMER_STATUS_STYLES"][status];
    const isRunning = status === "running";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        whileHover: {
            scale: 1.03
        },
        whileTap: {
            scale: 0.97
        },
        onClick: onClick,
        className: `
        relative flex items-center gap-2 px-3 py-1.5 rounded-2xl border cursor-pointer
        backdrop-blur-sm transition-all duration-200
        ${styles.bg} ${styles.border} ${styles.shadow}
        ${isPopupOpen ? "ring-2 ring-primary-500/40 border-primary-500/60 bg-primary-500/15" : ""}
        hover:bg-primary-500/10 hover:border-primary-500/30
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: isRunning ? {
                    rotate: [
                        0,
                        10,
                        -10,
                        0
                    ]
                } : {},
                transition: isRunning ? {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                } : {},
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    size: 14,
                    className: `${isPopupOpen ? "text-primary-400" : styles.icon} transition-colors`
                }, void 0, false, {
                    fileName: "[project]/views/Room/components/TimerDisplay.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/views/Room/components/TimerDisplay.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-sm font-mono font-semibold tracking-wider ${isPopupOpen ? "text-primary-300" : styles.text} transition-colors`,
                children: formattedTime
            }, void 0, false, {
                fileName: "[project]/views/Room/components/TimerDisplay.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    opacity: [
                        1,
                        0.3,
                        1
                    ]
                },
                transition: {
                    repeat: Infinity,
                    duration: 1.5
                },
                className: "w-1.5 h-1.5 rounded-full bg-primary-400"
            }, void 0, false, {
                fileName: "[project]/views/Room/components/TimerDisplay.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isPopupOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -2
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 border-b border-r border-primary-500/60 rotate-45"
            }, void 0, false, {
                fileName: "[project]/views/Room/components/TimerDisplay.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/views/Room/components/TimerDisplay.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TimerDisplay;
var _c;
__turbopack_context__.k.register(_c, "TimerDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/components/TimerPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimerPopup",
    ()=>TimerPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/views/Room/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useTimerPopup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useTimerPopup.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TimerPopup = (props)=>{
    _s();
    const { formattedTime, progress, hasVotes, onStart, onPause, onResume, onReset } = props;
    const { selectedSeconds, setSelectedSeconds, isIdle, isRunning, isPaused, isFinished } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useTimerPopup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimerPopup"])(props);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.95,
            y: -8
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: -8
        },
        transition: {
            duration: 0.15
        },
        className: "absolute top-12 left-1/2 -translate-x-1/2 w-72 bg-neutral-800/95 backdrop-blur-xl border border-neutral-700/50 rounded-2xl shadow-2xl shadow-black/40 z-50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pt-5 pb-3 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 16,
                                className: "text-neutral-400"
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/TimerPopup.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-neutral-400 uppercase tracking-wider",
                                children: "Temporizador"
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/TimerPopup.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Room/components/TimerPopup.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-4xl font-mono font-bold tracking-widest ${isRunning ? "text-primary-300" : isFinished ? "text-emerald-400" : "text-white"}`,
                        children: formattedTime
                    }, void 0, false, {
                        fileName: "[project]/views/Room/components/TimerPopup.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isIdle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 h-1 w-full bg-neutral-700/50 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `h-full rounded-full ${isFinished ? "bg-emerald-500" : "bg-primary-500"}`,
                            initial: false,
                            animate: {
                                width: `${progress}%`
                            },
                            transition: {
                                duration: 0.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/TimerPopup.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/views/Room/components/TimerPopup.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/views/Room/components/TimerPopup.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isIdle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pb-4 flex items-center justify-center gap-3",
                children: [
                    isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        onClick: onPause,
                        className: "w-10 h-10 rounded-xl bg-neutral-700/60 hover:bg-neutral-600/60 border border-neutral-600/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/TimerPopup.tsx",
                            lineNumber: 82,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/views/Room/components/TimerPopup.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    isPaused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        onClick: onResume,
                        className: "w-10 h-10 rounded-xl bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/40 flex items-center justify-center text-primary-300 hover:text-primary-200 transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/TimerPopup.tsx",
                            lineNumber: 93,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/views/Room/components/TimerPopup.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    isFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "text-xs text-emerald-400 font-medium",
                        children: "¡Tiempo!"
                    }, void 0, false, {
                        fileName: "[project]/views/Room/components/TimerPopup.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        onClick: onReset,
                        className: "w-10 h-10 rounded-xl bg-neutral-700/60 hover:bg-neutral-600/60 border border-neutral-600/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/TimerPopup.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/views/Room/components/TimerPopup.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/views/Room/components/TimerPopup.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isIdle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pb-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-5 gap-1.5",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIMER_PRESET_SECONDS"].map((sec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.08
                                },
                                whileTap: {
                                    scale: 0.92
                                },
                                onClick: ()=>setSelectedSeconds(sec),
                                className: `py-2 rounded-xl border text-sm font-medium transition-all ${selectedSeconds === sec ? "bg-primary-500/30 border-primary-500/60 text-primary-300" : "bg-neutral-700/50 hover:bg-primary-500/20 border-neutral-600/40 hover:border-primary-500/40 text-neutral-300 hover:text-primary-300"}`,
                                children: [
                                    sec,
                                    "s"
                                ]
                            }, sec, true, {
                                fileName: "[project]/views/Room/components/TimerPopup.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/views/Room/components/TimerPopup.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 1,
                                max: 300,
                                value: selectedSeconds || "",
                                onChange: (e)=>setSelectedSeconds(Number(e.target.value)),
                                placeholder: "Seg",
                                className: "flex-1 px-3 py-1.5 rounded-xl bg-neutral-700/50 border border-neutral-600/40 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30"
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/TimerPopup.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: selectedSeconds > 0 ? {
                                    scale: 1.05
                                } : {},
                                whileTap: selectedSeconds > 0 ? {
                                    scale: 0.95
                                } : {},
                                onClick: ()=>selectedSeconds > 0 && hasVotes && onStart(selectedSeconds),
                                disabled: !selectedSeconds || selectedSeconds <= 0 || !hasVotes,
                                className: `px-3 py-1.5 rounded-xl border text-sm font-medium transition-all flex items-center gap-1 ${selectedSeconds > 0 && hasVotes ? "bg-primary-500/20 hover:bg-primary-500/30 border-primary-500/40 text-primary-300 hover:text-primary-200" : "bg-neutral-700/30 border-neutral-600/30 text-neutral-500 cursor-not-allowed"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/TimerPopup.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Iniciar"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/views/Room/components/TimerPopup.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Room/components/TimerPopup.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !hasVotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-neutral-500 text-center",
                        children: "Se requiere al menos un voto para iniciar"
                    }, void 0, false, {
                        fileName: "[project]/views/Room/components/TimerPopup.tsx",
                        lineNumber: 169,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/views/Room/components/TimerPopup.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/views/Room/components/TimerPopup.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TimerPopup, "bM2dcPGoq2mjuK2BMi8OduZm2zU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useTimerPopup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimerPopup"]
    ];
});
_c = TimerPopup;
var _c;
__turbopack_context__.k.register(_c, "TimerPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/components/CardSetModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardSetModal",
    ()=>CardSetModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/views/Room/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useCardSetModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useCardSetModal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CardSetModal = ({ isOpen, onClose, cardSet, onUpdateCardSet })=>{
    _s();
    const { customCards, setCustomCards, hasChanges, hasDuplicates, handleApply, handleRestore } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useCardSetModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardSetModal"])({
        cardSet,
        onUpdateCardSet,
        onClose
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                }, void 0, false, {
                    fileName: "[project]/views/Room/components/CardSetModal.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.15
                    },
                    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-sm bg-neutral-800/95 backdrop-blur-xl border border-neutral-700/50 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-5 py-4 border-b border-neutral-700/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-white",
                                        children: "Configuración de cartas"
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        whileHover: {
                                            rotate: 90
                                        },
                                        whileTap: {
                                            scale: 0.9
                                        },
                                        onClick: onClose,
                                        className: "p-1.5 rounded-lg hover:bg-neutral-700/50 text-neutral-400 hover:text-neutral-300 transition-all",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 py-4 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2",
                                                children: "Cartas actuales"
                                            }, void 0, false, {
                                                fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5",
                                                children: cardSet.values.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2.5 py-1 rounded-lg bg-primary-500/15 border border-primary-500/30 text-xs font-mono font-semibold text-primary-300",
                                                        children: v
                                                    }, v, false, {
                                                        fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            onClick: handleRestore,
                                            className: "w-full py-2 rounded-xl text-xs font-medium cursor-pointer transition-all border bg-neutral-700/40 border-neutral-600/40 text-neutral-300 hover:bg-neutral-700/60 hover:text-white",
                                            children: "Restaurar Fibonacci"
                                        }, void 0, false, {
                                            fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2",
                                                children: "Personalizado"
                                            }, void 0, false, {
                                                fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: customCards,
                                                onChange: (e)=>setCustomCards(e.target.value),
                                                rows: 4,
                                                placeholder: "0, 1, 2, 3, 5, 8, 13, 21",
                                                className: "w-full px-3 py-2 rounded-xl bg-neutral-700/40 border border-neutral-600/40 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            hasDuplicates && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-red-400 mt-1",
                                                children: "No se permiten valores duplicados"
                                            }, void 0, false, {
                                                fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                                lineNumber: 104,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                whileHover: hasChanges && !hasDuplicates ? {
                                                    scale: 1.02
                                                } : {},
                                                whileTap: hasChanges && !hasDuplicates ? {
                                                    scale: 0.98
                                                } : {},
                                                onClick: handleApply,
                                                disabled: !hasChanges || hasDuplicates,
                                                className: `mt-2 w-full py-2 rounded-xl border text-sm font-medium transition-all ${hasChanges && !hasDuplicates ? "bg-primary-500/20 hover:bg-primary-500/30 border-primary-500/40 text-primary-300 hover:text-primary-200 cursor-pointer" : "bg-neutral-700/20 border-neutral-700/30 text-neutral-500 cursor-not-allowed"}`,
                                                children: "Aplicar"
                                            }, void 0, false, {
                                                fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/views/Room/components/CardSetModal.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Room/components/CardSetModal.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/views/Room/components/CardSetModal.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/views/Room/components/CardSetModal.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CardSetModal, "4YfIFY3CBaq6m1ZXHSw00kF5TYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useCardSetModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardSetModal"]
    ];
});
_c = CardSetModal;
var _c;
__turbopack_context__.k.register(_c, "CardSetModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/views/Room/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useHeader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useTimer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$UserPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/UserPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$TimerDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/TimerDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$TimerPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/TimerPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$CardSetModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/CardSetModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const Header = ({ roomId, userName, isObserver, isAdmin, cardSet, onToggleObserver, onUpdateUserName, onUpdateCardSet, onRevealVotes, hasVotes, onCloseRoom, onLogout })=>{
    _s();
    const { today, isPopupOpen, popupRef, togglePopup, handleShareRoom, handleToggleObserver } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeader"])({
        roomId,
        onToggleObserver
    });
    const { timer, formattedTime, progress, start, pause, resume, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimer"])(roomId, onRevealVotes);
    const [isTimerPopupOpen, setIsTimerPopupOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCardSetModalOpen, setIsCardSetModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timerPopupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleTimerPopup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Header.useCallback[toggleTimerPopup]": ()=>{
            setIsTimerPopupOpen({
                "Header.useCallback[toggleTimerPopup]": (prev)=>!prev
            }["Header.useCallback[toggleTimerPopup]"]);
        }
    }["Header.useCallback[toggleTimerPopup]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleClickOutside = {
                "Header.useEffect.handleClickOutside": (e)=>{
                    if (timerPopupRef.current && !timerPopupRef.current.contains(e.target)) {
                        setIsTimerPopupOpen(false);
                    }
                }
            }["Header.useEffect.handleClickOutside"];
            if (isTimerPopupOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "Header.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        isTimerPopupOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                initial: {
                    y: -20,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                className: "py-3 px-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    rotate: 360
                                },
                                transition: {
                                    duration: 0.6
                                },
                                className: "w-8 h-8 bg-linear-to-br from-secondary-500 via-primary-500 to-primary-600 rounded-lg flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold text-sm",
                                    children: "PP"
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/Header.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/Header.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold text-white",
                                        children: "Planning Poker"
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/Header.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-neutral-400",
                                        children: today
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/Header.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/views/Room/components/Header.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Room/components/Header.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: timerPopupRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$TimerDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimerDisplay"], {
                                        formattedTime: formattedTime,
                                        status: timer.status,
                                        progress: progress,
                                        isPopupOpen: isTimerPopupOpen,
                                        onClick: toggleTimerPopup
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/Header.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: isTimerPopupOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$TimerPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimerPopup"], {
                                            timer: timer,
                                            formattedTime: formattedTime,
                                            progress: progress,
                                            hasVotes: hasVotes,
                                            onStart: start,
                                            onPause: pause,
                                            onResume: resume,
                                            onReset: reset
                                        }, void 0, false, {
                                            fileName: "[project]/views/Room/components/Header.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/Header.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/views/Room/components/Header.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                onClick: handleShareRoom,
                                className: "btn btn-ghost cursor-pointer focus:outline-none flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/Header.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Compartir"
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/Header.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/views/Room/components/Header.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center gap-2 ml-2 pl-2 border-l border-neutral-700/50",
                                ref: popupRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right hidden sm:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-white",
                                                children: userName
                                            }, void 0, false, {
                                                fileName: "[project]/views/Room/components/Header.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xxs text-neutral-400",
                                                children: [
                                                    "ID: ",
                                                    roomId
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/views/Room/components/Header.tsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/views/Room/components/Header.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        whileHover: {
                                            scale: 1.1
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        onClick: togglePopup,
                                        className: "w-8 h-8 rounded-full bg-linear-to-br from-secondary-500 cursor-pointer via-primary-500 to-primary-600 flex items-center justify-center text-white font-bold hover:shadow-lg hover:shadow-primary-500/30 transition-all",
                                        children: userName.charAt(0).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/Header.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: isPopupOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$UserPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserPopup"], {
                                            userName: userName,
                                            roomId: roomId,
                                            isObserver: isObserver,
                                            isAdmin: isAdmin,
                                            onToggleObserver: handleToggleObserver,
                                            onSaveName: onUpdateUserName,
                                            onOpenCardSetModal: ()=>setIsCardSetModalOpen(true),
                                            onCloseRoom: onCloseRoom,
                                            onLogout: onLogout
                                        }, void 0, false, {
                                            fileName: "[project]/views/Room/components/Header.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/Header.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/views/Room/components/Header.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Room/components/Header.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/views/Room/components/Header.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$CardSetModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSetModal"], {
                isOpen: isCardSetModalOpen,
                onClose: ()=>setIsCardSetModalOpen(false),
                cardSet: cardSet,
                onUpdateCardSet: onUpdateCardSet
            }, void 0, false, {
                fileName: "[project]/views/Room/components/Header.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Header, "LCLbCPr7qdOactA1b1DpWRM9jqU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeader"],
        __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimer"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/views/Room/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useSidebar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useSidebar.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Sidebar = (props)=>{
    _s();
    const { users, votes, revealed, currentUserId } = props;
    const { getUserVote, voterCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useSidebar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])(props);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            x: -20,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        className: "w-full md:w-80 bg-linear-to-b px-4  flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-bold text-white mb-1",
                        children: "Usuarios Conectados"
                    }, void 0, false, {
                        fileName: "[project]/views/Room/components/Sidebar.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-neutral-400",
                        children: [
                            users.length,
                            " ",
                            users.length === 1 ? "usuario" : "usuarios"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Room/components/Sidebar.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/views/Room/components/Sidebar.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sidebarContainerVariants"],
                initial: "hidden",
                animate: "show",
                className: "flex-1 overflow-y-auto px-1 py-2 space-y-1",
                children: users.map((user)=>{
                    const userVote = getUserVote(user.id);
                    const roleKey = user.role;
                    const roleInfo = __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLE_CONFIG"][roleKey];
                    const RoleIcon = roleKey === "admin" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"];
                    const isCurrentUser = user.id === currentUserId;
                    const hasVoted = userVote !== undefined;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sidebarItemVariants"],
                        whileHover: {
                            scale: 1.02
                        },
                        className: `p-2 rounded-lg border-2 transition-all cursor-default ${isCurrentUser ? "bg-linear-to-r from-primary-500/20 to-primary-600/10 border-primary-500/50 shadow-lg shadow-primary-500/20" : "bg-neutral-800/50 border-neutral-700/30 hover:bg-neutral-700/50 hover:border-neutral-600/50"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: isCurrentUser ? {
                                                    scale: [
                                                        1,
                                                        1.1,
                                                        1
                                                    ]
                                                } : {},
                                                transition: {
                                                    duration: 2,
                                                    repeat: Infinity
                                                },
                                                className: "w-8 h-8 rounded-full bg-linear-to-br from-secondary-500 via-primary-500 to-primary-600 flex items-center justify-center text-white text-sm font-bold shrink-0 ring-2 ring-primary-400/50",
                                                children: user.name.charAt(0).toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/views/Room/components/Sidebar.tsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-white truncate flex items-center gap-2",
                                                        children: [
                                                            user.name,
                                                            isCurrentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-normal text-primary-400 bg-primary-400/10 px-2 py-1 rounded shrink-0",
                                                                children: "Tú"
                                                            }, void 0, false, {
                                                                fileName: "[project]/views/Room/components/Sidebar.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/views/Room/components/Sidebar.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleIcon, {
                                                                size: 12,
                                                                className: roleInfo.color
                                                            }, void 0, false, {
                                                                fileName: "[project]/views/Room/components/Sidebar.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-neutral-400",
                                                                children: roleInfo.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/views/Room/components/Sidebar.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/views/Room/components/Sidebar.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/views/Room/components/Sidebar.tsx",
                                                lineNumber: 70,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/views/Room/components/Sidebar.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/Sidebar.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                !user.isObserver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0,
                                        rotate: -90
                                    },
                                    animate: {
                                        scale: 1,
                                        rotate: 0
                                    },
                                    className: `w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold ring-2 transition-all ${hasVoted ? "bg-green-500/20 text-green-400 border border-green-500/50 ring-green-500/30" : "bg-neutral-700/50 text-neutral-500 border border-neutral-600/50 ring-neutral-600/30"}`,
                                    children: hasVoted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            scale: [
                                                1,
                                                1.2,
                                                1
                                            ]
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/views/Room/components/Sidebar.tsx",
                                            lineNumber: 105,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/Sidebar.tsx",
                                        lineNumber: 101,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/Sidebar.tsx",
                                        lineNumber: 108,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/Sidebar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                user.isObserver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: "w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-yellow-500/10 ring-2 ring-yellow-500/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        size: 14,
                                        className: "text-yellow-400"
                                    }, void 0, false, {
                                        fileName: "[project]/views/Room/components/Sidebar.tsx",
                                        lineNumber: 120,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/Sidebar.tsx",
                                    lineNumber: 115,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/views/Room/components/Sidebar.tsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, user.id, false, {
                        fileName: "[project]/views/Room/components/Sidebar.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/views/Room/components/Sidebar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-4 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-neutral-400",
                                    children: "Votación:"
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/Sidebar.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `font-semibold ${revealed ? "text-green-400" : "text-yellow-400"}`,
                                    children: revealed ? "Revelado" : "Esperando"
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/Sidebar.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/views/Room/components/Sidebar.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-neutral-400",
                                    children: "Votos:"
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/Sidebar.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-primary-400",
                                    children: [
                                        votes.length,
                                        "/",
                                        voterCount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/views/Room/components/Sidebar.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/views/Room/components/Sidebar.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/views/Room/components/Sidebar.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/views/Room/components/Sidebar.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/views/Room/components/Sidebar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Sidebar, "HzXx1nt0H8i7xBd4NBUJVuCqKNg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useSidebar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/components/VotingArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VotingArea",
    ()=>VotingArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bar-chart-3.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$help$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/help-circle.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/views/Room/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useVotingArea$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useVotingArea.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/utils/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const VotingArea = ({ room, currentUser, votes, onRevealVotes, onResetVotes, isAdmin, revealed })=>{
    _s();
    const { stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useVotingArea$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVotingArea"])({
        votes
    });
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VotingArea.useMemo[positions]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRingPositions"])(room.users.length)
    }["VotingArea.useMemo[positions]"], [
        room.users.length
    ]);
    const canReveal = isAdmin && !revealed && votes.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "flex-1 flex flex-col items-center justify-center px-2 py-4 md:py-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full max-w-[500px] max-h-[500px] aspect-square mx-auto",
            children: [
                room.users.map((user, i)=>{
                    const pos = positions[i];
                    if (!pos) return null;
                    const hasVoted = votes.some((v)=>v.userId === user.id);
                    const vote = votes.find((v)=>v.userId === user.id);
                    const isSelf = user.id === currentUser.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            delay: i * 0.04,
                            type: "spring",
                            stiffness: 300
                        },
                        className: "absolute flex flex-col items-center z-10 -translate-x-1/2 -translate-y-1/2",
                        style: {
                            left: pos.left,
                            top: pos.top
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: revealed && vote ? {
                                    rotateY: [
                                        0,
                                        90,
                                        0
                                    ]
                                } : {},
                                transition: {
                                    duration: 0.5,
                                    delay: i * 0.06
                                },
                                className: `w-10 h-14 md:w-11 md:h-[60px] rounded-lg flex items-center justify-center font-bold border-2 shadow-lg text-sm ${user.isObserver ? "bg-neutral-700/30 border-neutral-600/30 text-neutral-500" : revealed && vote ? "bg-primary-500/20 border-primary-500/50 text-primary-300" : hasVoted ? "bg-green-500/15 border-green-500/40 text-green-400" : "bg-neutral-700/40 border-neutral-600/40 text-neutral-500"}`,
                                children: user.isObserver ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                                    lineNumber: 72,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)) : revealed && vote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base font-bold",
                                    children: vote.value
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                                    lineNumber: 74,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)) : hasVoted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                                    lineNumber: 76,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$help$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                                    lineNumber: 78,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/VotingArea.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[10px] md:text-xs mt-0.5 max-w-14 md:max-w-16 truncate text-center leading-tight ${isSelf ? "text-primary-400 font-semibold" : "text-neutral-400"}`,
                                children: user.name
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/VotingArea.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, user.id, true, {
                        fileName: "[project]/views/Room/components/VotingArea.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    children: canReveal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: onRevealVotes,
                        id: "table",
                        className: "w-42 h-42 rounded-full bg-primary-500/10 border-2 border-primary-500/40 flex flex-col items-center justify-center cursor-pointer shadow-xl shadow-primary-500/10 hover:bg-primary-500/20 hover:border-primary-500/60 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                size: 22,
                                className: "text-primary-400 mb-1"
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/VotingArea.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-primary-300 text-xs font-semibold",
                                children: "Revelar Votos"
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/VotingArea.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Room/components/VotingArea.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : revealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.9,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        id: "table",
                        className: "w-42 h-42 rounded-full bg-neutral-800/95 border-2 border-neutral-600 flex flex-col items-center justify-center shadow-xl",
                        children: stats ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-green-400 text-sm font-bold",
                                                    children: stats.min
                                                }, void 0, false, {
                                                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-neutral-500 text-[12px] uppercase",
                                                    children: "Min"
                                                }, void 0, false, {
                                                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/views/Room/components/VotingArea.tsx",
                                            lineNumber: 118,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-primary-400 text-xl font-bold",
                                                    children: stats.average
                                                }, void 0, false, {
                                                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-neutral-500 text-[12px] uppercase",
                                                    children: "Promedio"
                                                }, void 0, false, {
                                                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/views/Room/components/VotingArea.tsx",
                                            lineNumber: 126,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-400 text-sm font-bold",
                                                    children: stats.max
                                                }, void 0, false, {
                                                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-neutral-500 text-[12px] uppercase",
                                                    children: "Max"
                                                }, void 0, false, {
                                                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/views/Room/components/VotingArea.tsx",
                                            lineNumber: 134,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                                    lineNumber: 117,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    onClick: onResetVotes,
                                    className: "mt-1.5 px-3 py-1 rounded-lg bg-neutral-700/50 hover:bg-neutral-700 text-neutral-400 hover:text-primary-400 transition-all cursor-pointer flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/views/Room/components/VotingArea.tsx",
                                            lineNumber: 150,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-medium",
                                            children: "Reiniciar"
                                        }, void 0, false, {
                                            fileName: "[project]/views/Room/components/VotingArea.tsx",
                                            lineNumber: 151,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                                    lineNumber: 144,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-neutral-400 text-sm",
                            children: "Sin datos"
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/VotingArea.tsx",
                            lineNumber: 156,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/views/Room/components/VotingArea.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        id: "table",
                        animate: {
                            y: [
                                0,
                                -6,
                                0
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 2
                        },
                        className: "w-36 h-36 rounded-full bg-neutral-800/95 border-2 border-dashed border-neutral-600 flex items-center justify-center shadow-lg hover:border-neutral-500 transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-neutral-400 text-sm font-medium text-center px-2",
                            children: "Esperando votos"
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/VotingArea.tsx",
                            lineNumber: 166,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/views/Room/components/VotingArea.tsx",
                        lineNumber: 160,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/views/Room/components/VotingArea.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/views/Room/components/VotingArea.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/views/Room/components/VotingArea.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(VotingArea, "8ptrYLjHqxfzI3alYZeJWLNOgW4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useVotingArea$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVotingArea"]
    ];
});
_c = VotingArea;
var _c;
__turbopack_context__.k.register(_c, "VotingArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/components/CardSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardSelector",
    ()=>CardSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/views/Room/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useCardSelector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useCardSelector.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CardSelector = ({ cardSet, onVote, currentUserVote, isObserver, revealed })=>{
    _s();
    const { scrollContainerRef, showArrows, scroll } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useCardSelector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardSelector"])(cardSet);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: 20,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        className: "px-2  py-3 md:py-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center w-full gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-poppins font-semibold text-white-400 uppercase tracking-widest",
                        children: isObserver ? "Observador" : " Selecciona tu voto"
                    }, void 0, false, {
                        fileName: "[project]/views/Room/components/CardSelector.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/views/Room/components/CardSelector.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [
                        showArrows && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            onClick: ()=>scroll("left"),
                            className: "hidden md:flex shrink-0 items-center cursor-pointer justify-center w-10 h-10 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700/50 text-neutral-400 hover:text-neutral-300 transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/CardSelector.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/CardSelector.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scrollContainerRef,
                            className: "flex-1 overflow-x-auto w-full   md:max-w-xl scrollbar-hide md:overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardSelectorContainerVariants"],
                                initial: "hidden",
                                animate: "show",
                                className: "flex gap-2 pb-2 py-4 md:justify-center mx-auto",
                                children: cardSet.values.map((value)=>{
                                    const isSelected = currentUserVote?.value === value;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardSelectorItemVariants"],
                                        whileHover: !isObserver && !revealed ? {
                                            scale: 1.15,
                                            rotateY: -5
                                        } : {},
                                        whileTap: !isObserver && !revealed ? {
                                            scale: 0.9
                                        } : {},
                                        onClick: ()=>!isObserver && !revealed && onVote(value),
                                        disabled: isObserver || revealed,
                                        className: `shrink-0 w-10 h-18 md:w-14 md:h-20 max-w-16 rounded-xl font-bold text-base transition-all duration-200 border-2 ${isSelected ? "bg-linear-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/50 border-primary-400 ring-2 ring-primary-400/30" : "bg-linear-to-br from-neutral-700/70 to-neutral-800/70 text-neutral-400 hover:bg-linear-to-br hover:from-primary-600/50 hover:to-primary-700/50 border-neutral-700/50 hover:border-primary-500/50"} ${isObserver || revealed ? "cursor-not-allowed opacity-60" : "hover:text-white cursor-pointer hover:shadow-md hover:shadow-primary-500/30"} flex items-center justify-center active:scale-95`,
                                        children: value
                                    }, value, false, {
                                        fileName: "[project]/views/Room/components/CardSelector.tsx",
                                        lineNumber: 65,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/CardSelector.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/CardSelector.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        showArrows && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            onClick: ()=>scroll("right"),
                            className: "hidden md:flex shrink-0 items-center cursor-pointer justify-center w-10 h-10 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700/50 text-neutral-400 hover:text-neutral-300 transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/views/Room/components/CardSelector.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/views/Room/components/CardSelector.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/views/Room/components/CardSelector.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/views/Room/components/CardSelector.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/views/Room/components/CardSelector.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CardSelector, "d4xNzcyaPxq8LKyZhQMGuOS+w5I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useCardSelector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardSelector"]
    ];
});
_c = CardSelector;
var _c;
__turbopack_context__.k.register(_c, "CardSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$UserPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/UserPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$CardSetModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/CardSetModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$TimerDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/TimerDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$TimerPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/TimerPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$VotingArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/VotingArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$CardSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/CardSelector.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Guest/components/GuestHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GuestHeader",
    ()=>GuestHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const GuestHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                transition: {
                    delay: 0.1,
                    type: "spring",
                    stiffness: 300
                },
                className: "w-16 h-16 mx-auto mb-6 bg-linear-to-br from-secondary-500 via-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl font-bold text-white",
                    children: "PP"
                }, void 0, false, {
                    fileName: "[project]/views/Guest/components/GuestHeader.tsx",
                    lineNumber: 14,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/views/Guest/components/GuestHeader.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-center text-white mb-2",
                children: "Bienvenido a Planning Poker"
            }, void 0, false, {
                fileName: "[project]/views/Guest/components/GuestHeader.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-neutral-300 text-sm mb-6",
                children: "Ha sido invitado a una sala de votación"
            }, void 0, false, {
                fileName: "[project]/views/Guest/components/GuestHeader.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
_c = GuestHeader;
var _c;
__turbopack_context__.k.register(_c, "GuestHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Guest/components/GuestInfoBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GuestInfoBox",
    ()=>GuestInfoBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
"use client";
;
;
;
const GuestInfoBox = ({ roomId })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: 0.2
        },
        className: "mb-6 p-4 rounded-lg bg-primary-500/10 border border-primary-500/30 flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                size: 18,
                className: "text-primary-400 shrink-0 mt-0.5"
            }, void 0, false, {
                fileName: "[project]/views/Guest/components/GuestInfoBox.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-primary-300 mb-1",
                        children: "Acceso seguro"
                    }, void 0, false, {
                        fileName: "[project]/views/Guest/components/GuestInfoBox.tsx",
                        lineNumber: 17,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-neutral-400",
                        children: [
                            "Ingresa tu nombre para unirte a la sala ",
                            roomId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Guest/components/GuestInfoBox.tsx",
                        lineNumber: 20,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/views/Guest/components/GuestInfoBox.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/views/Guest/components/GuestInfoBox.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = GuestInfoBox;
var _c;
__turbopack_context__.k.register(_c, "GuestInfoBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Guest/components/GuestForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GuestForm",
    ()=>GuestForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
;
const GuestForm = ({ userName, error, isLoading, onUserNameChange, onSubmit })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-white-300",
                        children: "Tu nombre"
                    }, void 0, false, {
                        fileName: "[project]/views/Guest/components/GuestForm.tsx",
                        lineNumber: 17,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.95,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        transition: {
                            delay: 0.3
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: userName,
                            onChange: (e)=>onUserNameChange(e.target.value),
                            placeholder: "Ingresa tu nombre",
                            autoFocus: true,
                            disabled: isLoading,
                            className: "w-full px-4 py-3 rounded-lg bg-white/5 border-2 border-white/20 focus:border-primary-400/50 text-white placeholder:text-white focus:outline-none transition-all focus:ring-2 focus:ring-primary-400/30 disabled:opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/views/Guest/components/GuestForm.tsx",
                            lineNumber: 25,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/views/Guest/components/GuestForm.tsx",
                        lineNumber: 20,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    error.userName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: -10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "flex items-center gap-2 text-red-400 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/views/Guest/components/GuestForm.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            error.userName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Guest/components/GuestForm.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/views/Guest/components/GuestForm.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                whileHover: {
                    scale: 1.02
                },
                whileTap: {
                    scale: 0.98
                },
                disabled: isLoading || !userName.trim(),
                className: "btn disabled:opacity-50 py-3 disabled:cursor-not-allowed w-full flex items-center justify-center gap-1 bg-white text-primary-600 hover:bg-secondary-100 border-none font-semibold shadow-lg hover:shadow-xl transition-all",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 1,
                                repeat: Infinity
                            },
                            className: "w-4 h-4 border-2 border-transparent border-t-white rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/views/Guest/components/GuestForm.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Conectando..."
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Unirse a la Sala",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/views/Guest/components/GuestForm.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/views/Guest/components/GuestForm.tsx",
                lineNumber: 48,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/views/Guest/components/GuestForm.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = GuestForm;
var _c;
__turbopack_context__.k.register(_c, "GuestForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Guest/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$components$2f$GuestHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Guest/components/GuestHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$components$2f$GuestInfoBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Guest/components/GuestInfoBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$components$2f$GuestForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Guest/components/GuestForm.tsx [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Guest/hooks/useGuestForm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGuestForm",
    ()=>useGuestForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const useGuestForm = ({ onJoin })=>{
    _s();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleUserNameChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuestForm.useCallback[handleUserNameChange]": (value)=>{
            setUserName(value);
            if (error.userName) setError({});
        }
    }["useGuestForm.useCallback[handleUserNameChange]"], [
        error.userName
    ]);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGuestForm.useCallback[handleSubmit]": (e)=>{
            e.preventDefault();
            if (!userName.trim() || userName.trim().length < 2) {
                setError({
                    userName: "El nombre debe tener al menos 2 caracteres"
                });
                return;
            }
            setError({});
            onJoin(userName.trim());
        }
    }["useGuestForm.useCallback[handleSubmit]"], [
        userName,
        onJoin
    ]);
    return {
        userName,
        error,
        handleUserNameChange,
        handleSubmit
    };
};
_s(useGuestForm, "JL7NCVNPNYtvHXyXN5GnuprN/jw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Guest/hooks/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$hooks$2f$useGuestForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Guest/hooks/useGuestForm.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Guest/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Guest",
    ()=>Guest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/views/Guest/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$components$2f$GuestHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Guest/components/GuestHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$components$2f$GuestInfoBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Guest/components/GuestInfoBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$components$2f$GuestForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Guest/components/GuestForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/views/Guest/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$hooks$2f$useGuestForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Guest/hooks/useGuestForm.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Guest = ({ roomId, onJoin, isLoading })=>{
    _s();
    const { userName, error, handleUserNameChange, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$hooks$2f$useGuestForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuestForm"])({
        onJoin
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-neutral-900 via-primary-900 to-neutral-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            rotate: 360
                        },
                        transition: {
                            duration: 40,
                            repeat: Infinity,
                            ease: 'linear'
                        },
                        className: "absolute -top-40 -right-40 w-80 h-80 rounded-full bg-linear-to-br from-primary-500/20 to-secondary-500/20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/views/Guest/index.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            rotate: -360
                        },
                        transition: {
                            duration: 40,
                            repeat: Infinity,
                            ease: 'linear'
                        },
                        className: "absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-linear-to-br from-secondary-500/20 to-pink-500/20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/views/Guest/index.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/views/Guest/index.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.9,
                    opacity: 0,
                    y: 20
                },
                animate: {
                    scale: 1,
                    opacity: 1,
                    y: 0
                },
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                },
                className: "w-full max-w-md z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-linear-to-br from-neutral-800/80 to-neutral-900/90 backdrop-blur-xl border-2 border-primary-500/30 rounded-2xl p-8 shadow-2xl shadow-primary-500/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$components$2f$GuestHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestHeader"], {}, void 0, false, {
                            fileName: "[project]/views/Guest/index.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$components$2f$GuestInfoBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestInfoBox"], {
                            roomId: roomId
                        }, void 0, false, {
                            fileName: "[project]/views/Guest/index.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$components$2f$GuestForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestForm"], {
                            userName: userName,
                            error: error,
                            isLoading: isLoading,
                            onUserNameChange: handleUserNameChange,
                            onSubmit: handleSubmit
                        }, void 0, false, {
                            fileName: "[project]/views/Guest/index.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs text-neutral-500 mt-6",
                            children: [
                                "¿Primera vez? Crea tu propia sala en",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary-400 font-medium",
                                    children: "Planning Poker"
                                }, void 0, false, {
                                    fileName: "[project]/views/Guest/index.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/views/Guest/index.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/views/Guest/index.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/views/Guest/index.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/views/Guest/index.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Guest, "95yqZAX+b3y1tLaGfGv93LhhCKI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$hooks$2f$useGuestForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuestForm"]
    ];
});
_c = Guest;
var _c;
__turbopack_context__.k.register(_c, "Guest");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/views/Room/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Room",
    ()=>Room
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x-circle.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/views/Room/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$VotingArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/VotingArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$CardSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/components/CardSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Guest/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/views/Room/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useRoom.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useGuestAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/hooks/useGuestAccess.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAlert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAlert.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const Room = ({ roomId })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { addAlert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAlert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAlert"])();
    const { room, currentUser, isReady, roomNotFound, handleVote, handleRevealVotes, handleResetVotes, handleUpdateCardSet, handleToggleObserver, handleUpdateUserName, handleLeaveRoom, handleCloseRoom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoom"])(roomId, addAlert);
    const { showGuestPrompt, isJoiningAsGuest, handleGuestJoin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useGuestAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuestAccess"])(roomId, addAlert);
    if (roomNotFound) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            className: "flex items-center justify-center min-h-screen bg-neutral-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                            size: 32,
                            className: "text-red-400"
                        }, void 0, false, {
                            fileName: "[project]/views/Room/index.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/views/Room/index.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-white mb-2",
                        children: "Sala no disponible"
                    }, void 0, false, {
                        fileName: "[project]/views/Room/index.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-neutral-400 text-sm mb-6",
                        children: "La sala que intentas acceder no existe o fue cerrada por el administrador."
                    }, void 0, false, {
                        fileName: "[project]/views/Room/index.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: ()=>router.push("/"),
                        className: "px-6 py-2.5 rounded-xl bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/40 text-primary-300 hover:text-primary-200 text-sm font-medium transition-all",
                        children: "Volver al inicio"
                    }, void 0, false, {
                        fileName: "[project]/views/Room/index.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/views/Room/index.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/views/Room/index.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (showGuestPrompt) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Guest$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Guest"], {
            roomId: roomId,
            onJoin: handleGuestJoin,
            isLoading: isJoiningAsGuest
        }, void 0, false, {
            fileName: "[project]/views/Room/index.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!isReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            className: "flex items-center justify-center min-h-screen bg-neutral-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-full border-4 border-primary-500/30 border-t-primary-500 animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/views/Room/index.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-neutral-400",
                        children: "Conectando a la sala..."
                    }, void 0, false, {
                        fileName: "[project]/views/Room/index.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/views/Room/index.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/views/Room/index.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const isAdmin = currentUser?.role === "admin";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen font-poppins overflow-hidden bg-linear-to-br from-neutral-900 via-primary-900 to-neutral-90",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                roomId: room.id,
                userName: currentUser.name,
                isObserver: currentUser.isObserver,
                isAdmin: isAdmin,
                cardSet: room.cardSet,
                onToggleObserver: handleToggleObserver,
                onUpdateUserName: handleUpdateUserName,
                onUpdateCardSet: handleUpdateCardSet,
                onRevealVotes: handleRevealVotes,
                hasVotes: room.votes.length > 0,
                onCloseRoom: handleCloseRoom,
                onLogout: handleLeaveRoom
            }, void 0, false, {
                fileName: "[project]/views/Room/index.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex md:flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                            users: room.users,
                            votes: room.votes,
                            revealed: room.revealed,
                            currentUserId: currentUser.id
                        }, void 0, false, {
                            fileName: "[project]/views/Room/index.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/views/Room/index.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col w-full",
                        style: {
                            height: "calc(100vh - 64px)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$VotingArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VotingArea"], {
                                room: room,
                                currentUser: currentUser,
                                votes: room.votes,
                                onRevealVotes: handleRevealVotes,
                                onResetVotes: handleResetVotes,
                                isAdmin: isAdmin,
                                revealed: room.revealed
                            }, void 0, false, {
                                fileName: "[project]/views/Room/index.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$components$2f$CardSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSelector"], {
                                cardSet: room.cardSet,
                                onVote: handleVote,
                                currentUserVote: room.votes.find((v)=>v.userId === currentUser?.id),
                                isObserver: currentUser?.isObserver ?? false,
                                revealed: room.revealed
                            }, void 0, false, {
                                fileName: "[project]/views/Room/index.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/views/Room/index.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/views/Room/index.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/views/Room/index.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Room, "FW6eBgcVyuuq4q00UmNnHXo3A9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAlert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAlert"],
        __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$hooks$2f$useGuestAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuestAccess"]
    ];
});
_c = Room;
var _c;
__turbopack_context__.k.register(_c, "Room");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/room/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/views/Room/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RoomPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const roomId = params.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$views$2f$Room$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"], {
        roomId: roomId
    }, void 0, false, {
        fileName: "[project]/app/room/[id]/page.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_s(RoomPage, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = RoomPage;
var _c;
__turbopack_context__.k.register(_c, "RoomPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0jl5g-f._.js.map
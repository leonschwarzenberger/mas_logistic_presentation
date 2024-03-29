import {configureStore} from '@reduxjs/toolkit';
import {pageSliceReducer} from "./slice/pageSlice";
import {baseSliceReducer} from "../simulation/store/slice/baseSlice";
import {cameraSliceReducer} from "../simulation/store/slice/cameraSlice";
import {globalSliceReducer} from "./slice/globalSlice";
import {agvSliceReducer} from "../simulation/store/slice/agvSlice";
import {taskSliceReducer} from "../simulation/store/slice/taskSlice";
import {trafficSliceReducer} from "../simulation/store/slice/trafficSlice";

export const store = configureStore({
    reducer: {
        globalReducer: globalSliceReducer,
        pageReducer: pageSliceReducer,
        simuBaseReducer: baseSliceReducer,
        cameraReducer: cameraSliceReducer,
        agvReducer: agvSliceReducer,
        taskReducer: taskSliceReducer,
        trafficReducer: trafficSliceReducer,
    },
});

export type IRootState = ReturnType<typeof store.getState>;

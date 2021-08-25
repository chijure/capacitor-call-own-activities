package com.reateguisolisjm.callownactivities;

import android.content.Intent;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Open Activity")
public class OpenActivity extends Plugin {

  @PluginMethod()
  public void openJava(PluginCall call) {
    getActivity().startActivity(new Intent(getContext(), JavaActivity.class));
  }

  @PluginMethod()
  public void openKotlin(PluginCall call) {
    getActivity().startActivity(new Intent(getContext(), KotlinActivity.class));
  }
}
